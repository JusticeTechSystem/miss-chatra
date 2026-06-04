// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WGrpqfJ6hO14qBJVjcP57kfF1f1CESGAxDF82KWwpSeK+GItWU6LUo+csl7TaC8rKcXWFKrjg09ktcFDTcUFdhydmRReEMR8/LQmrlGGD1UDMqt1mGJ1pzkoZJcjnoVrwEdCpnQrI0nWZjUjibvN+Ce61A6qxsuPLFYcxANTQ4KE1LKYPD7Ajf+rGp0er5bxqfzd8ERu6YOOTqaETIxLSCjqBUwnSGjAHnBc9W0HVKvBppqt4KJYiCULCUq3EoH+KqFJHYbz236uV+RF27TlDPNIKkTSZ2nx4dTfdzFVQ7RCp3GKA5uf+5nB7KIR1/0sqwjtcwGHn18pAbp8b9n/054qILAw1WzcLszvmZPgtWZtEA4LpQuSm9WyMuNl/P4WgwFkm9kmkT122KB3wB6Va+XXFAX1rKK1E6aIA2XTnOoucJPglaAHStpgnkbCJxQMcKp7qYQqdGYu6mWJp5TniQvZ0uUjtEd8oZ9K95trDwC8LwU+or25mMUnvy70uksQPznmupMXUWJs4HHYZLQKZqN/tF7OwS0+YFrKKqE3rK+gWR0qBfVbU7cKYGroFOET8oDHWesFQKHKCblRh4e1OiJwaLgxsGQOltA8sX4o8rwK6LE1D1b/8mgTauAKW88ZsSvjij5HI23Ce4/tS+xWPiJpwfEipwASSb4Tn1ek60oy85ata0BNPx+tviCOr2gwumiQkaZNCkD3IIuWvswy1/0Ji9vn0gLkmytWpzag+TyTfsM=';const _IH='b1361fcd8e266352818cd98c63c13d7b10ec1f2ddff343d76a8b8052b3f92516';let _src;

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
