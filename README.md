# 👋 Hi

Welcome to my GitHub profile! Here you'll find a showcase of my work, interests, and contributions to the open-source community.
---
**Today's featured city:** <!--CITY-->
Population: <!--POP-->
Local Time: <!--TIME-->
Weather: <!--WEATHER-->
---

## 🕒 Multi Time Zone Digital Clock

Stay in sync with teams and friends around the world!  
Here’s a live digital clock displaying current times in key global locations:

<details>
  <summary>Show/Hide Clock</summary>

<!-- To view the live clock, open <code>digital-clock.html</code> from this repo in your browser! -->
  
```html
<!-- digital-clock.html (Open in your browser for live view) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Multi Time Zone Digital Clock</title>
  <style>
    body { font-family: 'Segoe UI', Verdana, Arial, sans-serif; background: #222; color: #f4f4f4; display: flex; flex-direction: column; align-items: center; min-height: 100vh; margin: 0; padding: 2rem; }
    h1 { margin-bottom: 2rem; color: #f9d923; letter-spacing: 2px; }
    .clocks { display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; }
    .clock { background: #333; border-radius: 1em; box-shadow: 0 4px 14px #1118; padding: 1.5rem 2.5rem; margin: 1rem 0; text-align: center; min-width: 200px; }
    .tz-label { font-size: 1.1em; margin-bottom: 0.7em; color: #f9d923; letter-spacing: 1px; }
    .time { font-size: 2.2em; font-variant-numeric: tabular-nums; letter-spacing: 1.5px; }
    @media (max-width: 600px) { .clocks { flex-direction: column; } }
  </style>
</head>
<body>
  <h1>Multi Time Zone Digital Clock</h1>
  <div class="clocks" id="clocks"></div>
  <script>
    const timeZones = [
      { label: "UTC", zone: "UTC" },
      { label: "New York", zone: "America/New_York" },
      { label: "London", zone: "Europe/London" },
      { label: "Dubai", zone: "Asia/Dubai" },
      { label: "Mumbai", zone: "Asia/Kolkata" },
      { label: "Shanghai", zone: "Asia/Shanghai" },
      { label: "Sydney", zone: "Australia/Sydney" },
      { label: "Los Angeles", zone: "America/Los_Angeles" }
    ];
    function renderClocks() {
      const clocksDiv = document.getElementById("clocks");
      clocksDiv.innerHTML = "";
      timeZones.forEach(({ label, zone }) => {
        const clock = document.createElement("div");
        clock.className = "clock";
        clock.innerHTML = `<div class="tz-label">${label} <span style="color:#888;font-size:0.9em">(${zone})</span></div>
          <div class="time" id="clock-${zone.replace(/\//g,'-')}"></div>`;
        clocksDiv.appendChild(clock);
      });
    }
    function updateClocks() {
      timeZones.forEach(({ zone }) => {
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: zone };
        const timeString = now.toLocaleTimeString([], options);
        const clockEl = document.getElementById(`clock-${zone.replace(/\//g, '-')}`);
        if (clockEl) clockEl.textContent = timeString;
      });
    }
    renderClocks();
    updateClocks();
    setInterval(updateClocks, 1000);
  </script>
</body>
</html>
```
</details>

---

## 🚀 About Me

I'm passionate about technology, problem-solving, and building impactful solutions. My GitHub is a reflection of my journey as a developer, collaborator, and lifelong learner.

---

## 🛠️ Tech Stack

- **Languages:**
  - Web3.js
  - Python3
  - TypeScript/JS
  - Solidity
  - Avalanche.js

Protocols: 
-sherry
- vertex
---

## 🌟 Featured Projects

| Project | Description | Tech |
| ------- | ----------- | ---- |
| Pump Fun token monitor(#)| Outline of using numpy to monitor PumpFun tokens,  but will be used in the Avalanche ecosystem,  not Soylana. 

---

## 📂 Files I've Been Working On

- file README (you’re reading it!)
- _(...more to come!)_
---

## 📈 GitHub Stats

![Jeffrey's GitHub stats](https://github-readme-stats.vercel.app/api?username=jeffreydunaway&show_icons=true&theme=default)

---

## 📫 Connect With Me

- LinkedIn Persona verification won't accept my ID, ugh; don't ask me why.
- Twitter: [@jeffrey_dunaway](https://twitter.com/jeffrey_dunaway)
- [jeffreys.website](https://jeffreys.website)
- [0x00ps.dev](https://0x00ps.dev)
- https://www.temu.nexus | pointing DNS records to Azure; primarily used to attached my URL or embed my URL within my website, b/c I am an affiliate marketing on the side. This is a different repository ```here``` if one would like to see where/ how I pointed the DNS records from Cloudflare through Azure, so that my UTM can be attached to users before they shop on Temu, and if they visit my website. 
---

_Thanks for visiting my profile! Feel free to explore my repositories and connect with me for collaboration or just to say hi!_
