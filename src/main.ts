import EvilScientist from "./alias";

const scientists: EvilScientist[] = [];

function addScientist(event: Event): void {
  event.preventDefault();
  
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const age = parseInt((document.getElementById('age') as HTMLInputElement).value, 10);
  const henchmen = parseInt((document.getElementById('henchmen') as HTMLInputElement).value, 10);
  const description = (document.getElementById('description') as HTMLTextAreaElement).value;

  const newScientist: EvilScientist = { name, age, henchmen, description };
  scientists.push(newScientist);

  renderScientistList();
  clearForm();
}

function renderScientistList(): void {
  const list = document.getElementById('scientist-list')!;
  list.innerHTML = scientists.map((s) => `<li data-name="${s.name}">${s.name}</li>`).join('');

  list.querySelectorAll('li').forEach((item) =>
    item.addEventListener('click', () => showScientistDetails(item.dataset.name!))
  );
}

function showScientistDetails(name: string): void {
  const scientist = scientists.find((s) => s.name === name);
  const detailSection = document.getElementById('scientist-details')!;
  if (scientist) {
    detailSection.innerHTML = `
      <p><strong>Name:</strong> ${scientist.name}</p>
      <p><strong>Age:</strong> ${scientist.age}</p>
      <p><strong>Henchmen:</strong> ${scientist.henchmen}</p>
      <p><strong>Description:</strong> ${scientist.description}</p>
    `;
  }
}

function clearForm(): void {
  (document.getElementById('scientist-form') as HTMLFormElement).reset();
}

document.getElementById('scientist-form')!.addEventListener('submit', addScientist);
