package com.springvehicle_sharing.presentation;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.springvehicle_sharing.dal.ArchivioUtentiDAO;
import com.springvehicle_sharing.dal.VeicoliDAO;
import com.springvehicle_sharing.entities.ArchivioUtenti;
import com.springvehicle_sharing.entities.Veicolo;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("veicoli")
public class VeicoliMVC {

	@Autowired
	VeicoliDAO dao;
	
	@Autowired
	ArchivioUtentiDAO uDao;
	
	@GetMapping("inserisci")
	public String inserisciVeicolo(HttpSession session) {
		
		if (session.getAttribute("loggedUser") == null) {
			session.setAttribute("showBtn", false);
			return "loginUserError";
		}
		
		ArchivioUtenti utente = (ArchivioUtenti) session.getAttribute("loggedUser");
		
		if (session.getAttribute("loggedUser") != null) {
			
			if (utente.getTipo() != 'A') {
				session.setAttribute("showBtn", true);
				return "loginUserError";
			}
			
			return "pagina-di-inserimento-veicolo";
		}
		
		return "redirect:/utenti/login";
	}
	
	public static String UPLOAD_DIRECTORY = "src/main/resources/static/assets/uploads";
	
	@PostMapping("addVeicolo")
	public String addVeicolo(HttpSession session, @RequestParam("alimentazione") 
			String alimentazione, @RequestParam("descrizione") String descrizione, 
			@RequestParam(value = "disponibilitaNoleggio", required = false) String 
			disponibilitaNoleggio, @RequestParam(value = "immagineVeicolo", required = false) 
			MultipartFile file, @RequestParam(value = "posizioneAttuale", required = false) 
			String posizioneAttuale, @RequestParam("tipologia") String tipologia,
			@RequestParam("modello") String modello, @RequestParam("marca") String marca,
			@RequestParam("colore") String colore, @RequestParam("cilindrata") String cilindrata,
			RedirectAttributes redirectAttrs) {
		
		ArchivioUtenti utente = (ArchivioUtenti) session.getAttribute("loggedUser");
		
		if (session.getAttribute("loggedUser") != null) {
			
			if (utente.getTipo() != 'A')
				return "loginUserError";
		}
		
		Veicolo veicolo = new Veicolo();
		veicolo.setModello(modello);
		veicolo.setMarca(marca);
		veicolo.setColore(colore);
		veicolo.setCilindrata(cilindrata);
		
		
		veicolo.setAlimentazione(alimentazione);
		veicolo.setDescrizione(descrizione);
		
		if (disponibilitaNoleggio != null)
			veicolo.setDisponibilitaNoleggio(disponibilitaNoleggio);
		
		if (file != null) {
			StringBuilder fileNames = new StringBuilder();
			Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, file.getOriginalFilename());
			fileNames.append(file.getOriginalFilename());
			try {
				Files.write(fileNameAndPath, file.getBytes());
				veicolo.setImmagineVeicolo(fileNames.toString());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.getMessage();
			}
		}
		
		if (posizioneAttuale != null)
			veicolo.setPosizioneAttuale(posizioneAttuale);
		
		veicolo.setTipologia(tipologia);
		veicolo.setUtenteIns(utente);
		
		dao.save(veicolo);
		
		redirectAttrs.addFlashAttribute("success", true);
		
		return "redirect:/veicoli/inserisci";
	}
	
	@GetMapping("addVeicolo")
	public String redirect() {
		return "redirect:/utenti/login";
	}
	
	@GetMapping("elenco")
	public String elencoVeicoliAmministrabili(HttpSession session, Model m) {
		
		if (session.getAttribute("loggedUser") == null) {
			session.setAttribute("showBtn", false);
			return "loginUserError";
		}
		
		ArchivioUtenti utente = (ArchivioUtenti) session.getAttribute("loggedUser");
		
		if (session.getAttribute("loggedUser") != null) {
			
			if (utente.getTipo() != 'A') {
				session.setAttribute("showBtn", true);
				return "loginUserError";
			}
		}
		
		return "elenco-veicoli-amministrabili";
	}
	
	@RequestMapping("logout")
	public String logout(HttpSession session) {
		session.removeAttribute("loggedUser");
		session.removeAttribute("showBtn");
		return "redirect:/";
	}
	
	@PostMapping("editVeicolo")
	public String editVeicolo(HttpSession session, @RequestParam("veicoloId") int veicoloId,
			@RequestParam("alimentazione") String alimentazione, @RequestParam("descrizione")
			String descrizione, @RequestParam(value = "disponibilitaNoleggio", required = false) 
			String disponibilitaNoleggio, @RequestParam(value = "immagineVeicolo", required = false) 
			MultipartFile file, @RequestParam(value = "posizioneAttuale", required = false) 
			String posizioneAttuale, @RequestParam("tipologia") String tipologia, 
			@RequestParam("utenteIns") String utenteIns, @RequestParam("linkVeicolo") 
			String linkVeicolo, @RequestParam(defaultValue = "false", value = "delImg") 
			boolean delImg, Model m, @RequestParam("modello") String modello, 
			@RequestParam("marca") String marca, @RequestParam("colore") String colore, 
			@RequestParam("cilindrata") String cilindrata, RedirectAttributes redirectAttrs,
			@RequestParam(value = "immagineVeicoloNomeFile", required = false) 
			String immagineVeicoloNomeFile) {
		
		ArchivioUtenti utente = (ArchivioUtenti) session.getAttribute("loggedUser");
		
		if (session.getAttribute("loggedUser") != null) {
			
			if (utente.getTipo() != 'A')
				return "loginUserError";
		}
		
		Veicolo veicolo = new Veicolo();
		veicolo.setId(veicoloId);
		veicolo.setModello(modello);
		veicolo.setMarca(marca);
		veicolo.setColore(colore);
		veicolo.setCilindrata(cilindrata);
		
		
		veicolo.setAlimentazione(alimentazione);
		veicolo.setDescrizione(descrizione);
		
		if (disponibilitaNoleggio != null)
			veicolo.setDisponibilitaNoleggio(disponibilitaNoleggio);
		
		if (delImg) {
			
			new File(UPLOAD_DIRECTORY + "/" + immagineVeicoloNomeFile).delete();
			veicolo.setImmagineVeicolo(null);
		} else {
			
			if (!file.isEmpty()) {
				StringBuilder fileNames = new StringBuilder();
				Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, file.getOriginalFilename());
				fileNames.append(file.getOriginalFilename());
				try {
					Files.write(fileNameAndPath, file.getBytes());
					veicolo.setImmagineVeicolo(fileNames.toString());
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.getMessage();
				}
			} else {
				veicolo.setImmagineVeicolo(linkVeicolo);
			}
		}
		
		if (posizioneAttuale != null)
			veicolo.setPosizioneAttuale(posizioneAttuale);
		
		veicolo.setTipologia(tipologia);
		veicolo.setUtenteIns(uDao.findById(utenteIns).get());
		
		dao.save(veicolo);
		
		redirectAttrs.addFlashAttribute("updSuccess", true);
		
		return "redirect:/veicoli/elenco";
	}
	
	@GetMapping("editVeicolo")
	public String redirectEditVeicolo() {
		return "redirect:/utenti/login";
	}
	
	@GetMapping("{id}")
	public String veicoloSingolo(@PathVariable("id") int id, HttpSession session) {

		return "pagina-del-singolo-veicolo";
	}
	
}
