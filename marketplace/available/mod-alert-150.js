// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SIC/egUANFypnxhGNiypAn8jQjX9XbOJFqNNFMuxddwGOXzrME2suHMWjSUdR93q8Pt1dyKvEgZA8KknO+rqoJWPQ5viAa4t6aTpCZRnpbCOmoTBHSd0AU8CrSZUkB7SLAxIb9GiR3mDUu5MXxiXz//Zho5QsIWf2eNVn1mu5j3osehOSP9z327Gb/Dgwp8+3W2nVK4fEo0dcnF5Pmq6e2LBX3/Lv4G12C7nfPI2vM4CAdU0K2CcMpPxvj7H8yqjqFTuLeXTRMOZX5cDq4X02jj0EOjkzyhyoGnZrjcy9GagWmTF0Rgl5MwPZjl4YZ2qvPl3lKyHfu7LKLhmmIbb4XvOfcs6Vl/dycLJMfjeraEYm11jjm9o+Eq9vC1CGRQ64gQhUK4psJx6TWoAfSL5f7DJJdBctyiCtfQkhITPysZygT8AwX8HWffyQXP/vXXQUHybJdcXamy8kTcSMiUCWW1KVO/6TqlnEbTclRaH57Z053WEMOe9GxjZNcg9BECzDaZRy/HT6ga3I3LHqBB5eIVtdd09LpIVqEVzTktl9w3JtwFUUqJG2/CaxFpZ7dkXRL/xca3v/5nBM1PumYq6jpGd9bSBNwFy8syZ2bwPhq1g7ZdRU4uSzkTPt7M9YPGfp6r8BroAqBefA3VIdE5BZvYXvvtU5DCFrIlsXbwmF+ai9K/FfNH15dKLjNKAvP/317moLEDnDafHgi86VxD+25w6wvtN2bw4vVDj37CwYiGK//TJ9o4T6lqLmgeP522yFbsQWb2kw5ICAiEvBzKdZCOofiLDVHjRj8kjeDwcgdzEjTrSUdbU0Yv7vXmmK4N8VCHS6g+JDGp6sG4flbajrBSvDX/lBEZsvOwp+7v7kH2xvCcwVzfVTljt0zn8Fc8fhm2iV2CieALoWiVpz2+cxLOBNVKayRtYxFmK0lhZ21nHoODxkjqmcYoJCQoo/2GeNgXH6VuO+yYZXXspPd5gIZGztSUJf64slqKNHUoH5okMm0iA9IkiZwL3nWLUv35gXUToJDuCrlz/MLHWTQBJLcndUA1KDLFRKsPApG/sE8wdZkKE8wYJ3gAWNf4J8Wou22ErU0bAWCY2//pq7xJzNlgEAGdl8wwMCc/rUqLTbq5yDhNnFG1UHHUGlKeaT1Fg6nEV4psJFNacAT2A0AN5bkHfdoIFP1hiqYE0RODJ3tgZaeN+533KvDtmrYpfXval0oMK4WhYmmEdX6TdfVBYH7iWEUkXxiDITVYHRzIvsm++yuLsSbfZWm6U7hJ6+vjNED8skcME4sIo4ApwwH88b63WyhnG/btJkUOPWgGAGbG7zGISuRRDCOyQwM9aHxMsjoU88e7vvjCcJUID9Et/CBrH3EPvS4ququxHZe0q';const _IH='586012b503f7241d7ea4b0683874544dc76fdc3f03f2a134de707143990d2d9d';let _src;

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
