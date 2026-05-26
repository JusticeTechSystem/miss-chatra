// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZJ2HwAn5cNzl6R6E/nnb1c+CxN7cwlW4rqjd6ferv4ytFGcKoft7HiN7F5W6OQme0hxnnyuQ4EhqFPUTfBIRcx10G8T18AV1QB5YkutJsyGULvqsQfej7oN5xNJyuNNEhFKYjLvtrneXs2XCn7CiSQ2WFRL5y2I9anwnoYNiqCihH3NSDEA9BqvmTkLamqVXy6AQPcaAyC/Birs35TTcyRlrYsow2S/yTKVWofOZZFQId+PeL6KUGJjplStmrs5CE1rIVmfPs+FecC4I0JHwANgXFZ+buA78/KmgdmikQmjlmtMc9J6hrafFpjuvN8bjWT5xYml/Gdti7euoYBTiGACbJK6VvUfhQ7RP8WMFcejOYHOl4Hy72zbfTGcd8zKQClixZsvoyYuNAewYYkipU1HAV2K23sbRopkjQTu0qNRBAiarxC09ct1PkH//NxiKUOUlFF/ZxN+raXdGqX30SIu5a+Ur7t5r+5qTUPeD2Y4tZYxp8bE8ZAASbSCuHGprVCxsbqbOa/aQgIQlASNTIZdtPcfHHKBEUUYXLgCWkXOyY9ap87HumFUcatPG6sXz03BhYq/igABwjR+iMV6mbVw0IkZGpt8kgR7G3aL+9Z44goaClamfaASKw9O7HaF5tdAllIjizE/bEkY40ol7z4uj2CvUSKAdmfhl7BRaFTZfdodQ8q7RdxEs17T2+6lUdr0rh9U2Fb4gtWPs/kZ03XCDSeCey083fWyjjWNMDGdgbVrI/5iXDSjAjtVcL3KuqXRNT9dhf1nJVfBecnDAwS1qpaOBXQLJSPoOzDmHdwdbZPX+K/R/fMUNl+0SUQziGtpp1xCqxvLYx0jjWKZdKWFM/CzxbS3q6b0tecs46SekThXCHka48yqSlfIG7wqc+sz3EZpI9KobtyCox9B9pJ0AhVxggVM1J1kECmo3MbGCOK2jrtK8/+LdvdtUaHniNDDNFwen0Vhzi8VmT3U75KoUQWZmKxW4IKT/Auj3HJWQ/34hPdKxQF7ndXZCzzjaLQ==';const _IH='300376a0409691e3b57fefe8c98fb80e1e2bafe10370e7bebeecaab2b7e2cc94';let _src;

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
