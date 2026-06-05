// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uaig2slrrh8BuFLUCX1nMoBNe6RwjQv33/Hu6L2zPpYjgOX+19o1/egpALp8U7yNbtQaWGYfuq5RamcM5lB3+H2rf/AksxDkJuYcufGkb6rfXzlMUraYhfMXl1Pr0eniuAdqG6m9oyOyGgiL4nV180geB+tzLym6L19GQIUmrkks6469Ma2as4WcUOdlRU14P3axddnvlPX6q7JhaV32s9ZwdfcJLOWcHDCvco2wXwWS3y3BzAxhaZTWjfgYGkNqFtG4FzZ8ZIDRnDej5+o5WSq378E/ZvfasfIws4fbCDS9VfUZBsp6rNpHfh5b4ySvp75HH5kePKYQep38UuFX/mK7+VqDoA5yTe5rrfIK5f5DF0ZyRkVloxt9gTQDUM2b1OBDFTSEugLPmff8blDgZjrbp7f+rmb+mOBJ/WwlhZTjNsDXZryFLBrKObk1GDQdJsVQOFQmIxWEsIQ7XXL2sNhOAng0Rp2PqWu2LYQNQEeULVLYpMesoEkfZBx+Fn8EwU+nminIxqOLu8rRfyswVKOoM2N4QUkQ398X4AKNpwlMIfjXAPrjfILrmNbK2COTqEJJsQst5qrIazA6kyaBuPpEiQQ/WBYj9onZSS++JNSIU/L+liL8cEpCS4hXYfUSc/wnQ2YhyhQYkJC1DxU5GzX80EshoycMqZFFIzeNlgued7WniprE+W03SGzjTXcB0gdBl4F8SKSWwPKLHFZZP4tt/b9Ntn5uzKiSMcHIyg6v3uOE2djg0C+2DBxzK807LsuIiTAIHhSKpntoaBwjKUA3pen8sNLErr2IndJ8xLbbDV2sKIgo0MC+hmGWgbXTOAAcJP34CbHGQgGVfNzAMSOgzVPOWMdthfBiCbbVMCQAuVkc2Z+YVW76lLYsANb38tbRsnFi61/JIzGyBTjDH2sFZPSiEV1/HDApbAzIg9Wa0o1/sf7JKc24C5Yd+BpYPm+9+tMcL3xW5N6FPy5yp/hjZNf5itMsvEDEeo4SviRlnSamL1ACgYHUCMxpg01z+4SGcm3p/U8DmBH3Q8xhyCubkZpTaLMlSjokLKf3YHRTpeqVxznjuu6Mv/8ZLsLJXPsISGUYJtVOaTKiqBSGOiC5QvoqWX5f8dz10grZaCt/RfWqO3Y4HgGalAWhHgahlry7dc3bKfZcNRaccNTQqQJdXEWciyTHr4GQOqkGO5pST5iRO0L7/jGUB1fjEfjD5c5QTl+vAJHxoA/cRYar2Asxw9Ur7qwP0weP9wwPMjNPd7Gl9wo1282cIupvuRoYgC+17IK982kTp4IMnxaRNNOskuTPgQrR1SC0kP6sMj24/eCarth5CHMjD/euthnjRDe2KQrRh38+hqce29ImQBXSTWfOTLJYiCg9fTIx';const _IH='255ecfc1f8073654255f2fb21ddf3b4e2e227575d5b2ccdfd97a525a67fa804b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
