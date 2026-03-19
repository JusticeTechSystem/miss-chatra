// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7n6cGpo+BeVKLDFjRWj5lc8S873u7aD8pIam/ZT/h6RCUXT7KnMxn69F6RLqSt21QL+EQsM9IpErqb4pWC2Gm2OAMcRLXeWzsU5Ci8Hp5aG3EPLFngGc3gJIxn2AVHipjQ45UNmjOmwC3ieml6gwhT4mEbje1otbP1hVQgBzJcm0+d5gM3rkTrfrD2g0VYylaRvtUcFEhY/sPqXwpmxcqDYKtVDElBB6YLBjIOf8ylWsA6BwSDRqJGGi/uzEZcgqp9755Q2B2Zy83XG7UCfO56RDvnsnfV/VW02O6VRqgohXrKHJ0Gw72l9VGvTI238oSBsYZztd2wi40UYfXT1DRn2Xj/ZaQ25zaehoDSj9veyw81fCRF8olCxZNdoEPka95VcfEGBaEsDndXsNZfcVK1LW7sK57g2WXZswyKW0OwIItSXWNubij15CYGC1PoStmkHw8M4nhjCZ3yLt5HaOmKX2lPoqU7u5j3q89fOysYIT0YW7yih+kceAi7+pSVZi0ogZ1SlU6L3KgDZrSneT17/A5H9ReW2Izh6m+umxSgUHaXSc6UKRlHF8xpjsdIlqnaNTTGJlxMHSip/PohhGrBWzVd1l3G/tXXG6rN2gMAhfiMjDEoXwZ3Zk7wNs/OhAXLQZMG71u7TcH6e0nt4RpieY8Z7WeWOS/Eylh3Vls5vbUk7x+9lmHhQGCcMhfodPNp53+R5O7zQCqYgeTpqliBHDRNa8VB9juQVHyh7ygIqIG1RQGsClYORQ8j/beNDllf6TJrXfoRr54yEa0AjR933F3QDAUT4MgFVPSMPIowsh9IkCUqT9xozXU1QoUgq+XGPF8VOKTWpdYJQ2LUirr2yqF+F4wNffBPkXBbRP9p1EnLonBrd7kHWp7eapy5FW7oY78ceRGD9I9OXbR6TsiRsfe0uAkt98QosEUmPhnoyqDE3m5Yn0zWoo9PY3CjkniR5DYisTjfxFYPM5Y3Dll2saJ+VVXHVV46Z3+Yv3sl0mzgkWQ6PAJTrRH40Xb0fz+mjAq+KRJmCqdB5me6SIXyd3FIimfr5xulBAqXJvh8lexyh/bWIXdwDvryvJ5EJYz4dCb2G3s4YTimz1gAgH4bJbLnxtzeDzZLsOSkZ7xsF4U9uKGFFOSWSe5jPK6hD6KAHn6IiB5RQ+PTx65sUXxEC/2ns9daQShIP9ZVaC4J9g4bsycquYKNfcWYj95OVnhPbReiZl7adYEy7FUGMIYBMuHZgeg1ATcWBj84ROTsJutJEsDnccjjsz/vrHvuhljB8GYkOWjLhBH4AEOD3P4aw+/Simmkn1oiOv53uu7Ix6QXUuZd3s06jv1A8bGrTyg6XljbJao2LfzYppp5xDln0FJDkxAvEJw5uBoSle';
  const _INTEGRITY_HASH = '3beb8dfafb027ec45678f2d9fa9c854bc1711045aed0a9234bcfe4a356afe1d5';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
