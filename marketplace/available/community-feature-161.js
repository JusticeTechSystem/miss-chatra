// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/yVptT2aQ8W5LvIr8mkoBbTNxOZYzprbD3blE9eH8G8k2jSIDnSt3pf18gha3MXrRObh4pko4dW2sgdP4bQ+UmcWqNUtEDfKu4T7or10w+e0C3YNYQbEUCrtMlPOTWM0xkZfh92g9enIAJm5RHz1kZIvh3KD3IT7w0SVAmBINGjNej9oyF1v4hVP3oF4j6tpGgP6uyJDx9KmkMZwxaQdfg9J4RoOKmxBhX2FbYoRfl/WNjnLFNX0wb2Ed5YEGfPgM3nfGpLfuic2MS5vMVPSXJ5IgIk18ucfR2tslc1FrKQScKczEnBQ9uhPaa9muBCzO1PmTN6xJItqxkc0l6bzBD0VF9QNa7x57HjjSZ/r+wu9P6/JVaI3iD3pssitsrNdCIVP7koXk5h8ws8j71HE8XFdufYyEp8HXil7ys/auZiGFiPQR1yVjo4v5+5T3Tj3I/tmgjqnvS4F7PJ/lHO9xFcfzx0A4tauF6M/KouibAbgkoFzAe6+SEnARnfVge0AG7TPheCJ44LpF9uCfDAlSwY0te7t5b3GDySiXhqjFEdIqz0e1JJEUsk6B0p3jXW7INygByP8ESCIC2uis8jmg6PBbPQe+F17D7W7Y8GwEI43oxlR61km1I8IY5+GqH0bjMl3Ty2Abq858MtiQ+/UwAguOfBcHqxySedmM5WynDWVjjus91SvkGjp6Pn0JlGEry8piCcycHcRzACIpNGHFBkghVQajRZX';const _IH='daadef43431c4c33590e7c05702e800ca7697b228217735aeb7ebb76785e6326';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
