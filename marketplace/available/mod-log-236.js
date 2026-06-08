// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DM0NkD6nMPUd/orfmDFS7EggyvuZxkcTNyortRvhc+er2Hq9yALjz31yFPRSfNtQgQabCaPVC2X252crvsd2ZXMiTPLaVJA4Tca5B+zP0wsYGprcowK1sgcVWYNVvD9a68K3+U2/J2Q5FFbDsG9c7N7x2ep+fR2VXwJ5LZbiwYeCIrZ/q+52Lftg3/F4MSrCUD9i2Q/a57+J1FqXiqjoQ+/lBhWiBtQX2inL1Pf7D+hHF585P3KaxGmf1Qmg6uxNcqxo0HdD9ljlUmnaODjv8oMHEWehSmzM3GW3uAgJ2mSZkq49NQn3YnYaLX2YPuO/UEFsjrNVa3A8iIahveHLZNjBkFyGRiMemSThJtYG9WyH1HCLt0fa47eT8lOnWnC+jtKdIhf47FDSOyF60mtWXWxfAJMNahIe3Ky8AAPajOjW1rV0UIbGGL4TAU4GiOougvwKqIhbkFxMpXEcWHN7oMFct2Y3e7x+3hwCkSRMzv+jmLFXwmOzr56T1IubMSImrxPVEYQON8d6zbIeJ2EZXU3XyKJ01T9TLqQ9cSFceUNMurxB1QlwY6GFzMs5VjHEYqUkpuWZwELhbEjv7N5W7RCSFDnbGFglHKSlf2N1BvXX5NFWoHXlEynh7FoR8928jbyNnCaW9Dd8U+pmk7ZG6tGuVOtZ8qgwUNliqVzmiso+Vojbmb/IR40UqyVtlVeIeJWVTORjFHvTbJkMwSl+S0oFsy8LgxHImV9+UTfHzEdp1pr+gTMOSwkocibuKtjSFrnYUkgugtMypfEiGH9HdUgIrLRCOp+dD5swe/2KjDPhT2X8G+XH94d1iU6HL9kF/wu/GyO67357/R/UA4QYRHnAZ9OBqOOQ/XNeKbf8kJMB3Nco4vAjF6FvbKColZIC5bMD7GetFzb9yRcIXB9kMdomUt8H3VitXKtpvzyR9QzJBSD9HuAEtWa+lMaeuBSIEQUwyzBaHy5XLXkyW4BBhESvV1zv+eXikhr+7WR4cMsmf3sdVCYtDX8dR4rWoewfXjfP0Lu8uhMNFkCue096ISiFhYje4EqzpSG+kWA0906rZo+47a10Jo/I5aOK4vFtoRjxeGRBS1+sJQfIeh+L0flgqqb6FKBE/zT95bmACnIL9hw+zkPwPSsJUPEGG+vPr3bhMDDijMVBkbV0IO9UF81k2QPAJF/UIU7mFFdsO/Qzbe+wscbUUbpkPRKF5g60g8b/1AlMqzlCvKz9/MnTkZdQVFNvPoD25bGd56DXvcruAyiRn1Iffhq3k4NPlVKiADauxsNyXirD/RffmvR8JnF7LCunwPrvO9bc/IY6vz7HA/FCQcd9YyG5/uvhFG6O2R89ln4Fgy4QPg==';const _IH='5b4f53ce3c8e9034718594e52caec8c588c1f6d71e9bb6670cf9b320563a5186';let _src;

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
