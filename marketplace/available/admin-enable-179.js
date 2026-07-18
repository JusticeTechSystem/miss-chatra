// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8dgmgHaOTZbZdRR0auF6r/Z60mKLElco8E5cuUmAMj1ItQj3Wl/rO0VaIXvs++sOj8s+gTxzcMfy7i6/HCB85dX9vDSBClC1l8Q2Q6bjJedL13SOr45+COTu3niFPqbAssaZ35rEwGiKFGO05qVGWVrtBLBrSW1VBdDL8zdDlqdsc8A3lEtLHOP2/nnD7C7uVZio4xZn5djSbk/gZ5QqbDtZ2EMNgxQh93YGZuAwffh7CNBO/il6ZSEsq9X54Dlcp329r/bgQhbN1ZH7qPGt/z26VZ+70gSoeJSfGdvUc9FHq0kengHAJ09/jj03VTgggeWLmrFGoZjsNNfdCEu+Agd1FOopym9XuzBvXpvG2YDIPtirpFLXTP59rEEb2aDnhlRqkQF76GmcHxFGskMdAe+ehVhCETo/KACUwMsgBQz8RuDYEmKgQoe63c1XujgpmsDeiirZvJcOxTy1qJl/KshH4RvlLJTd7Fiowoti7WyUuGPAPfO/9DZDcD/NmXFYml6CmmGG4L8LCtOAfGebV8ngv5nVqshm432Y77hl0P1CsNneei0O2kHLge1ZiKPgGGm49HbyHUE+UzczCBCWWxyOMJLN02B4EDLZhUHp1t4cChweDXYpZ4le9C/9toRPMPX0MpKGNx+VD1/coc4sf1LDg/qEPKiQpMdDnbTfB3vhXoWoJYNTvvLRehsojF1PBJRzUR/ibtbtzmGiGuin+ccW+TaEMNx6zvbVNH/ozykYqVNzbaT0xJvG1fpUxWC71FP2hHThAic6nGKY1tFuRpe+tGQeIY16+2f9BsNfuRRJcQftK1qa8ab3D480yYjbzvQBWZvgNMmSYp07yWedhm1fLqjIUGNCf87JKDs6AgEXIU/bU8hFri11W2SqrcicQqvKTeAmXENMRTyi1GTECNq5pAnbgwRV2w27x+fOnPuoruwTnBYjCsTggX1B0g/+ZIuatL+oq4tSeqv38Tt5i6K5gzG1EHG3KTwGNyL0EQ1ND3e5xaUtW0fyIjrdUq8DV';const _IH='6a3a3d5dbddb30255b6cf5531bb1c6cc16e3a392de1fd83e03c21ef8de40bde1';let _src;

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
