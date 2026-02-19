diff --git a/script.js b/script.js
index 4221c2497ba451e015d9610a03833b61e28b6d2b..cc9dbb2ea69bba0ecb157f65c5dfdf2c2f48cfb8 100644
--- a/script.js
+++ b/script.js
@@ -1,4 +1,17 @@
 // Set current year in footer
 const y = document.getElementById("y");
 if (y) y.textContent = new Date().getFullYear();
 
+// Basic open/closed status (local time)
+const statusText = document.getElementById("open-status");
+if (statusText) {
+  const now = new Date();
+  const openHour = 10;
+  const closeHour = 22;
+  const hour = now.getHours();
+  const isOpen = hour >= openHour && hour < closeHour;
+
+  statusText.textContent = isOpen
+    ? "Open now • Closes at 10:00 PM"
+    : "Closed now • Opens at 10:00 AM";
+}
