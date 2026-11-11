
/* Quiz 5 (Fungi) patch: load AFTER the main <script>. First option in each list is the correct one. */
(function () {
  const mk = (id, s, d, p, stem, ref, opts) => ({
    id, subjectIndex: s, quarter: 1, slideRef: ref, difficulty: d, priority: p, stem,
    options: opts.map((o, i) => ({ text: o[0], correct: i === 0, why: o[1] + ' [' + ref + ']' }))
  });
  const S = 'Fungi Slides', L = 'Week 6 Lecture';
  const upsert = q => {
    const i = questionBank.findIndex(x => x.id === q.id);
    if (i >= 0) questionBank[i] = q; else questionBank.push(q);
  };
 
  [
    // ---------- FIXES ----------
    mk(28, 0, 'medium', true, 'Dimorphic fungi grow as molds at 37 degrees and as yeast at lower temps.', S, [
      ['False', 'Reversed. Dimorphic fungi are yeast at 37°C (body temperature) and mold at lower temperatures.'],
      ['True', 'This is the trap wording; the real pattern is yeast at 37°C, mold below.']]),
    mk(16, 2, 'medium', true, 'Which fungal infection causes a decrease in pigment of the color on the skin?', 'Week 6 Practice Quiz', [
      ['Tinea versicolor', 'Pityriasis versicolor (Malassezia furfur): white patches, usually on the trunk, not contagious, and not vitiligo.'],
      ['Tinea pedis', 'Athlete\'s foot: between the toes.'],
      ['Tinea unguium', 'Nails.'],
      ['Tinea corporis', 'Ringworm of the trunk with a red advancing ring.']]),
    mk(30, 1, 'medium', true, 'Most free-living saprobes fall under which Phylum of Fungi?', S, [
      ['Zygomycota', 'The slides state most Zygomycota are free-living saprobes (sexual: zygospores; asexual: mostly sporangiospores).'],
      ['Ascomycota', 'This is the largest group (ascospores/conidia), but the saprobe statement is on the Zygomycota slide.'],
      ['Basidiomycota', 'Basidiospores on club-like cells; includes mushrooms.'],
      ['Deuteromycota', 'Imperfect fungi: asexual reproduction only.']]),
    mk(36, 4, 'medium', true, 'Which primary systemic mycosis is associated with wet, decaying leaves and is found on the eastern seaboard?', L, [
      ['Blastomycosis', 'Her summary: wet leaves, eastern seaboard (North American blastomycosis).'],
      ['Coccidioidomycosis', 'Dirt in the Southwest deserts (Valley fever).'],
      ['Histoplasmosis', 'Bird droppings; Mississippi/Ohio Valley.'],
      ['Paracoccidioidomycosis', 'Dirt in Central/South America.']]),
    mk(37, 4, 'medium', true, 'Which primary systemic mycosis mainly affects outdoor/farm workers in Central and South America and is often asymptomatic?', S, [
      ['Paracoccidioidomycosis', 'Aka South American blastomycosis (Paracoccidioides brasiliensis / lutzii); many people have no symptoms, otherwise lungs and skin.'],
      ['Coccidioidomycosis', 'Southwest US deserts.'],
      ['Histoplasmosis', 'Mississippi/Ohio Valley.'],
      ['Blastomycosis', 'Eastern seaboard.']]),
    mk(39, 5, 'easy', false, 'Ergot poisoning (Claviceps purpurea on rye) causes convulsions or gangrene and is linked to which historical event?', L, [
      ['The Salem witch trials', 'Damp rye made ergot; victims twitched or had gangrene, which fed accusations of hexes.'],
      ['The Great Plague', 'Bacterial (Yersinia pestis).'],
      ['Discovery of penicillin', 'Penicillium is unrelated to ergot.'],
      ['The Broad Street cholera outbreak', 'Bacterial (Vibrio cholerae).']]),
    mk(42, 2, 'medium', true, 'How does tinea versicolor differ from the other tinea infections and from vitiligo?', L, [
      ['It is caused by yeast (Malassezia furfur), is not contagious, comes and goes as patches on the trunk; vitiligo is genetic and typically permanent.', 'Matches her description.'],
      ['It is highly contagious through shared gym equipment.', 'That describes dermatophyte tineas, not versicolor.'],
      ['It produces a red advancing ring on the scalp.', 'That is tinea capitis/corporis.'],
      ['It is the same disease as vitiligo.', 'Vitiligo is a genetic condition, not a fungal one.']]),
    mk(44, 5, 'medium', true, 'Which Candida presentation is most typical of people with HIV/AIDS?', S, [
      ['Esophageal candidiasis', 'Common in HIV/AIDS; invasive candidiasis (blood) means severe immunocompromise.'],
      ['Vulvovaginal candidiasis', 'Yeast infection, usually from flora imbalance (e.g., after antibiotics).'],
      ['Tinea corporis', 'A dermatophyte, not Candida.'],
      ['Tinea unguium', 'A dermatophyte nail infection, not Candida.']]),
    mk(45, 5, 'medium', true, 'Which opportunistic mycosis is a special risk in uncontrolled diabetes, can follow skin damage like a bad tattoo, and can turn tissue black?', S, [
      ['Mucormycosis (zygomycosis)', 'Rhizopus, Mucor, Absidia; diabetes lowers blood pH, which helps the fungus. Forms: rhinocerebral, pulmonary, cutaneous.'],
      ['Cryptococcosis', 'Soil yeast; mainly lungs and CNS.'],
      ['Aspergillosis', 'Lung fungus ball from inhaled conidia.'],
      ['Sporotrichosis', 'Subcutaneous, from a thorn prick.']]),
    mk(49, 4, 'easy', true, 'Digging in desert dirt in the Southwest aerosolizes fungi that, when inhaled, cause which infection?', L, [
      ['Coccidioidomycosis (Valley fever)', 'Caused by Coccidioides; lungs first, can later reach the skin.'],
      ['Histoplasmosis', 'Bird droppings.'],
      ['Blastomycosis', 'Wet leaves.'],
      ['Sporotrichosis', 'Subcutaneous from puncture, not inhaled.']]),
 
    // ---------- NEW ----------
    mk(51, 5, 'medium', true, 'Which of the 4 aflatoxin types is the most toxic?', L, [
      ['B1', 'B1 is carcinogenic and hepatotoxic (liver cancer); the other types are less toxic.'],
      ['G2', 'Not the most toxic.'], ['B2', 'Not the most toxic.'], ['G1', 'Not the most toxic.']]),
    mk(52, 5, 'medium', true, 'Aflatoxin contamination from Aspergillus is most associated with which foods, and the toxin glows under UV?', S, [
      ['Grains and legumes (e.g., corn, peanuts)', 'Improperly stored grains/legumes; contaminated seeds glow under UV, so batches can be sorted.'],
      ['Raw seafood and shellfish', 'Shellfish toxins come from algae.'],
      ['Fresh leafy greens', 'Not the aflatoxin source.'],
      ['Canned vegetables', 'That is the botulism example (bacterial).']]),
    mk(53, 5, 'medium', true, 'An immunocompromised person breathing conidia from grain silos develops a "fungus ball" in the lung. This is:', S, [
      ['Aspergillosis (aspergilloma)', 'Cough, coughing blood, shortness of breath; X-ray can resemble TB. Ingesting the same fungus\' product gives aflatoxin poisoning.'],
      ['Histoplasmosis', 'Bird droppings; can infect healthy people.'],
      ['Coccidioidomycosis', 'Southwest dirt.'],
      ['Sporotrichosis', 'Rose thorn prick.']]),
    mk(54, 0, 'easy', false, 'A chain of budding yeast cells that stay attached and mimic a mold filament is called a:', L, [
      ['Pseudohypha', 'Yeast buds that remain attached; other yeast cells nearby show it is not true mold.'],
      ['Mycelium', 'The woven mass of true hyphae.'],
      ['Sporangiophore', 'Stalk that holds a sporangium.'],
      ['Septate hypha', 'A true mold filament with cross-walls.']]),
    mk(55, 0, 'medium', false, 'Mold hyphae with no barrier between nuclei (her "boba through a straw") are:', L, [
      ['Non-septate', 'Continuous cytoplasm and nuclei.'],
      ['Septate', 'Have barriers between nuclei.'],
      ['Aerial', 'Describes position above the surface, not cross-walls.'],
      ['Vegetative', 'Describes the growing part inside the substrate.']]),
    mk(56, 1, 'easy', true, 'Which pairing of asexual division is correct?', S, [
      ['Yeast: budding (binary fission); mold: fragmentation', 'Budding is yeast only; fragmentation is mold only.'],
      ['Yeast: fragmentation; mold: budding', 'Reversed.'],
      ['Both use budding only', 'Molds fragment.'],
      ['Both use binary fission only', 'Only yeast buds.']]),
    mk(57, 1, 'medium', true, 'Which fungal spores add genetic diversification on top of reproduction and survival?', S, [
      ['Sexual spores (zygo-, asco-, basidiospores)', 'Two parental nuclei from different strains fuse and undergo meiosis.'],
      ['Asexual spores (conidia, sporangiospores)', 'Reproductive and survival only; clonal copies.'],
      ['Bacterial endospores', 'Survival only; no reproduction or diversification.'],
      ['All of these equally', 'Only sexual spores diversify.']]),
    mk(58, 3, 'medium', true, 'Subcutaneous mycoses are typically:', S, [
      ['Chronic, non-healing, localized, and follow skin trauma', 'Sporotrichosis, chromomycosis, mycetoma; all from puncture wounds in the environment.'],
      ['Acute infections from inhaled spores', 'That describes primary systemic mycoses.'],
      ['Spread person to person like tinea', 'They come from the environment.'],
      ['Seen only in AIDS patients', 'They can occur in healthy people.']]),
    mk(59, 2, 'medium', false, 'Which statement about tinea vs. superficial Candida is correct?', S, [
      ['Tinea (dermatophytes) is a true infection that can infect anyone; Candida is an opportunistic overgrowth', 'Dermatophytes love keratinized skin; Candida is already on your body and overgrows.'],
      ['Tinea is an opportunistic overgrowth of Candida', 'Tinea is caused by dermatophytes.'],
      ['Both are only seen in AIDS', 'Neither requires AIDS.'],
      ['Both are caused by worms', 'Ringworm is a fungus, not a worm.']]),
    mk(60, 2, 'easy', true, 'Why must tinea unguium be treated for 3 to 4 months?', S, [
      ['Until the entire infected nail grows out and is trimmed off', 'The fungus sits in the nail bed and returns otherwise.'],
      ['Because it spreads to the lungs', 'It stays local.'],
      ['Because it is resistant to all antifungals', 'It is treatable; the issue is nail growth time.'],
      ['Because it is a bacterial infection', 'It is fungal.']]),
    mk(61, 5, 'medium', false, 'Cryptococcus (C. neoformans/gattii) lives in soil and trees and, in immunocompromised people, mainly involves the:', S, [
      ['Respiratory and central nervous systems (and mucocutaneous sites)', 'Can disseminate to skin, bones, and viscera.'],
      ['Toenails only', 'That is tinea unguium.'],
      ['Scalp hair shafts', 'That is tinea capitis.'],
      ['Beard area', 'That is tinea barbae.']]),
    mk(62, 0, 'medium', true, 'Polyene antifungals work by combining with which fungal membrane component, causing leaks?', S, [
      ['Sterols (ergosterol, zymosterol)', 'Bacterial membranes have no sterols, so these are a target.'],
      ['Peptidoglycan', 'Bacterial cell wall; fungi use chitin/glucan/mannan.'],
      ['Cholesterol', 'Human sterol; fungi use ergosterol.'],
      ['Flagellin', 'A bacterial flagellum protein.']]),
    mk(63, 5, 'medium', true, 'Which mycotoxin inhibits protein synthesis and can kill from a small bite of the death cap mushroom?', S, [
      ['Amatoxin', 'The most deadly of the toxins; touching the mushroom is not the issue, eating it is.'],
      ['Aflatoxin', 'Carcinogenic and hepatotoxic, from Aspergillus.'],
      ['Ergot alkaloids', 'From Claviceps on rye.'],
      ['Candida toxin', 'Not a mycotoxin.']])
  ].forEach(upsert);
})();
 