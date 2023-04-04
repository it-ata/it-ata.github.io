const logoSizes = [
  { name: "Website Header - Horizontal", dimensions: "250 x 150 px", aspectRatio: "5:3" },
  { name: "Website Header - Vertical", dimensions: "160 x 160 px", aspectRatio: "1:1" },
  { name: "Website Header - Square", dimensions: "350 x 350 px", aspectRatio: "1:1" },
  { name: "Website Header - Large Horizontal", dimensions: "400 x 100 px", aspectRatio: "4:1" },
  { name: "Favicon - Standard Size 16x16", dimensions: "16 x 16 px", aspectRatio: "1:1" },
  { name: "Favicon - Standard Size 32x32", dimensions: "32 x 32 px", aspectRatio: "1:1" },
  { name: "Favicon - Standard Size 48x48", dimensions: "48 x 48 px", aspectRatio: "1:1" },
  { name: "Apple App Store X1", dimensions: "1024 x 1024 px", aspectRatio: "1:1" },
  { name: "Apple App Store iPhone X3", dimensions: "180 x 180 px", aspectRatio: "1:1" },
  { name: "Apple App Store iPad X2", dimensions: "167 x 167 px", aspectRatio: "1:1" },
  { name: "Apple iPad + iPad mini X2", dimensions: "152 x 152 px", aspectRatio: "1:1" },
  { name: "Apple iPad Pro", dimensions: "2048 x 2732 px", aspectRatio: "4:3" },
  { name: "Apple iPad Retina", dimensions: "1536 x 2048 px", aspectRatio: "3:4" },
  { name: "Apple iPad Mini", dimensions: "768 x 1024 px", aspectRatio: "3:4" },
  { name: "Apple iPhone 6, 6s, 7, 8", dimensions: "750 x 1334 px", aspectRatio: "9:16" }

    // Add other logo sizes here
];

const table = document.getElementById("logo-sizes");

function generateTableHead(table) {
    const thead = table.createTHead();
    const row = thead.insertRow();
    const headers = ["Name", "Dimensions", "Aspect Ratio"];

    for (const header of headers) {
        const th = document.createElement("th");
        th.textContent = header;
        row.appendChild(th);
    }
}

function generateTableContent(table, data) {
    for (const item of data) {
        const row = table.insertRow();
        const cellName = row.insertCell();
        cellName.textContent = item.name;
        cellName.style.backgroundColor = getRandomColor();

        const cellDimensions = row.insertCell();
        cellDimensions.textContent = item.dimensions;
        cellDimensions.style.backgroundColor = getRandomColor();

        const cellAspectRatio = row.insertCell();
        cellAspectRatio.textContent = item.aspectRatio;
        cellAspectRatio.style.backgroundColor = getRandomColor();

        const tooltip = document.createElement("span");
        tooltip.textContent = `${item.name}: ${item.dimensions} (${item.aspectRatio})`;
        tooltip.classList.add("tooltip");

        cellName.appendChild(tooltip);
        cellDimensions.appendChild(tooltip.cloneNode(true));
        cellAspectRatio.appendChild(tooltip.cloneNode(true));
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

generateTableHead(table);
generateTableContent(table, logoSizes);
