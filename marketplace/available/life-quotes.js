// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Es0aX+vcan4ogWuwibhPObNGbp4skvsJminlcQ5FHa1WLwWcj6wbggBQRhoYj2OtJfODa+D9g6/KV5zrMv3HHTAIwBOq6ZR1XdhI8BBNnolR/0x1URJhpZQ36s/iSeDhmtYqSH1IADbAkBDIqEqwM92raWf/nEsJYsyK5/H2QtofMN5aX1Tibn9N61nNhljnIxOxNXIHGgIgNuiP/XPoZ0EH7HuiZ+u5Vz8l63jR73dbjNQdgbnR/k1IXWzzFDnCcz0QrYTuDa1YLtXuAk98/2BxjNhyGOnczVZEFRqNUNRePtzz0wA0FNdvN/3kmvE+Y6wbA70g/sfgGUaPPRepO0CM8t62olyvESAkUaU+OcO/eTEv7YxDyLqe+kpEQIQVHit58Vi51e2h5Pt+hTKOo+m2LssD3tMwBv5dNOfUVmcAGlyZziT4uEFij2BqC9elkshAUxcU6/KG8HY2qgqdktHCI/xggeMNtBdunZ+ci55+NT1WaY4ryaIr/CvFsL2y/7pO5E1KI99+bswAsf195AO8An7K1KILuVrihMJp1WdHjRVzBq1OI38Y0kOHZns5iUPDK5X6HXXMMETWGUEEGm5LrK97QKedT9DMPJray3gTFLX/58clFeSU5KAk1sYkdZ6AvOFkLTZjcVwDg5MxttoqvA/ofGzcepHDnHcHZfEwgjWlQ8eBDGY+NwRrp7xinbAq/539bw7iZhwJvLjGhkoAkx2WDuR2yUZ5xIbZlMZaaK17RP45cOYmNA6JanDFJc30cQS8m9P1Rrkuar2qdzX/l5NeOfuXrJ2XcCVWcWo1GXVJ0yc3KvWOkSMgUzyTmp10R6Q7RIBhPZPU4eWZSMSMpcNpeNXkw1qoAdgiT+nzO24RaXlHfZLHszcORhkB2fb2pGeMeEV7w0t4MPqjN6lxFhKt/eyAS3SOdV4n1sbxTQ9zJLT+jrT1cScKtUkV7VPuLnheY43S+nk4yoSVrKRfdbMmDYYaa/E+gEv53KIHkaVEkz0zTGg3cqwqlI7sXI2bWWVmoqMlh0NfKVbEJ+8fNwVypk39TcT4qEaBxhURsla0UgsH+IUKr2mCW3gWcLonJDJqra+a596lA500V5x28jzyTg5PfdGDiOLwvAsMOV2TnSSOq3+cKDbrRSDp5UlRZefE4cBD6dAw5helYrRJuWz3l1xsYwmU7BfOSoPPMTJLMbPub23pK8saYWC2uALZ4PWUGIBJjJxfYaBQY+KwFOPosbnbxQbtZw6DrxdSvL/kijQtbDUbeUfEPFQkbRpPh1w17FDZhcKVyJ9TYa/BkyVreroCIt7ayOk2iYmWx9MlSFSXM80rijspRXbfc7lF5o18OrY7cDpp0FTd7p3+HTMvj2fQNGOpmNKCYWRsFzXzW+zhDG8diXvo/SxrufO+cHOGNI9RlrD8hN1zc+ArS4hAHXEm5FhtHbSUb9GzcM4yGf7w3g05gxpnEC7l2bOHg1F6A0gEz0vD4xO8T0wuRQTs3CyFFridbivzTaUixdVtxHvkLTads6glFmrO11LINEA614LCGi8Kc9/bXUO/r050xnM7P42HfjGeEW3o/Fk3sIKGDxtLIF7ObogWMkyjIuKNr07qI3ocnCdSGXjgZwR6QlPM1kvsf6DCUj5mDLhcpZFH7LU2IauSkZFsgI9uMIJwbAjemlH8xthua3wC6bCeQlVZAUTI6lzo4OEQ5zU//dTIjzDmU1BBNzXVU5nJNMhIr4YNuyNKLoVdTCAk4Atbrig2tYXly+oe8MHQbuCp4gy+FWAGhLGQCo7gye20LmR4zLtomUN4uBfE5zNTDeBqpHmLtT92MSaa4dhpXwcVelk/o5c3OXZVOz3g9tG6RhBXSPbTbAjIfVKDnqoG/QXq';const _IH='aab33ab55194111bb68ec09dbbad651b18ff0997d147916f317a6f0a96189ecd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
