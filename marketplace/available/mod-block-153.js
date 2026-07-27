// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQa0Of5TIPX34JsPOf5MnTnNQLfDY4Q9innZmhRBaTQS5YXwtK6JdJQpM3BM2w3qG/8XAsvyKnphyk1iEWGkMeGHebZ5tABbKlNUKPWntkeqFuITo/vPjIyVIGufBwvi80mh4TZAO+D5CT2MhwSXK7anLz4RrcuO9ZwV+8Ks2k1uuRUopAwZnJkaGr7dd98CS+uH85zzRO5CczefuHWSxj0UWxCAouLmrP3gGOVF/G4MfyLpvlH3quayfDB0SEi30Ps6k202G+2dfkuDUJ7mFA+LYcgW89pOENfWD/9HRpn66vM4/b9hYy2jOY+mtwLvQdqTTz+F6XvxWppWhGmJ+hEsGAJCSKlwZb+ZjpzDTuDSfZmVEZN1w8S3ZZwkJ3vizmXOjBHbRxwibqRaKFzGh7HP0L1YzVxUV4iSwXo94lu4P2tmARh6E678ruEocXUiK6vHgGif9TMkOpRiLLNeWU5LLa8wW//5vHhOm/PiXM2yNHVumkJ5JLvpoMLfOV2wxNKoaEEDWDqcNvbv09FT+27UI8UkpOXduiMKwVKLtUzdM6Qj+6V0jqgDGxT57lAV8nbvLxxI0tyOYR7a9Gkm4lW6rWwUCQKilaUKmXulL5CimQfx0mnId54RpPqMd+SIVe4pA7y524tYZinCs0bdmDeySlha2mVvX2XhDJEtdgRyeoaTppvA/BzgeVW57PFFw3Qyr7I71QBaDKtA2i7BbYD7/bLwWtn+7lBRh17j0wAsngFF8gKnxkh0iKcvssZNiwe795npiNBn5pUQLqLaN7jmRmIom5dtnSLR9VkSdU2Muq2Ui3OXRhaULNNMtDLJFcpeNs6Yd++/JnbboydaYs+pbsATWQ0BVO3DSg6eYuQf/B0wwQk8oU69FgTpxF7TVhH5F1M/b7iLTp1KW7NEopg4d40qyzu1y8b0cL9StUn09onZUItIw/bJwSB1fVdPignfETKzNBX+4UYIP8gs/js6xhVj4XctOplIywB/nVS1ucXBHQ/3zdUoq3rQmOccsjQl2r1fXkZgyvpxJ0nbolxba8kIrRyJ3E4+CKnY1INKm6L4OMwV5pTmQrZ8Qtbva9Leq12cNHbaTbTkzLWSS2xhfc2v0Kw+gCz/Uik4JgcPjjx4UX2BcIppt9/Qd+kFT7eg/oQowL/OhHbkuioiSGLI9OC9cgz4NUsbO2kkVK1AeBWw4HFpH+Gfhghq1iw44OeV4pGb6H2Mech47FhTcChT+DnLPrKyQgTAVQnI8YYvuGY2vrrJFtxVKua0NfnqkA2uDKCt8BT4iv3jlvWN3CL7YQoVZLfbfMvo166Lipz10GEwO05Fusr3cOqoow8Q9PJgAY4vRQm+9L29RyJGwYPJKqH7mZ1/T8Ndpo2rvw=';const _IH='14244d1cfe492f62bedd32d3c68b3b664b897be986320bc3e792ce7ca582351a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
