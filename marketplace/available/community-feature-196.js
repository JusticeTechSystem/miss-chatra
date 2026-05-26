// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='msRHF/+KPSkp+YHNUV8iQUWR9oXD1XSD3mFPHEhp2Xxf3tSZn9hOL0xK+VnA9ly+USWPzPtCnRy/AgpDt8SJ/aZuGpUNB7LtvA/TxpNd8mcosEY9sDP/KJS2ZY7/ZYzCaraoU0Yqtm/qVrKkFBoAaP4skWgho+C/5EEDKh8AgJW0dQkAa8AEAeERzijW5tgF3TRLjoyX+Kww4wx/6NjR5sRP742CPDGWfghKLgQ958mzM/YiiD38KGY3cWscWjvbP2o7QFkPODHiyQnd3hVPHsInBIbyfgbdVNKG61gyMRDqcRn1FJor0KaFRKXPeC6pesJ5ThYhHD9g2kn4eqvaCsKod50EUZlxJwZ5ZMZY6FKfmrV6p8uJVYDhuRCq6LOAAAd/UwFSLxJNS2o+j5/YReWdwcRoZk/MKaGeKhUyl+RaPR+676I7TAvzpv7EQxwBWwhU3sWHmSF/x/2JbAgj/qQSop+e4Jgr0cq9Uu/CCATM9MNNbzwsz5S1CkOTjqusNx5TxvVX2PG5A5c8Io5aPgJgxvZJqsf5pSh3FJMN/piYHw4nk9W3cZAbCOlzuw47VV4an/KyJP+71STALDrqVu20HdqEQAzfx7GZ3goRjfcBEiO8FEwm7i+sa7ny3xZ/r4i+g/VhVi18Qnkg74DFzxd2qO7D9kHAJPQbyB5PpL75MX4RQeSx2kNMNNgUkJ8fxoW/vOkbpgQdLYnW6UkjnMnZ6VAqhcwn';const _IH='7cf55f771c5ef56314f49e00179b975bad78cbb2b8148c05e8906f0c654b32cc';let _src;

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
