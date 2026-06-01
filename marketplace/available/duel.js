// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+jPoFaYm4o6yJK8LtHuBYapHcstLoophWWlI40OMo447ewPJLzSItW4bW2l06oWB2nAkmuoi1f6X9Jqo37cKMXOIl/rVzMgY2gitv1iCWjDfoA3CCVbAOTc16jVJpfGgKs61LmrUWfgqbP4ucKalXRMvzcXqukFDZ8lPoflq+gaQLCMMThHlTTimxhStfMe5NQdSw82weGDRDd5/HmuNvrz/50pa86NMk3v05LH8xdu/scQ13kK4/Gq3b/XQpA3+CQciPpThOrk0/JNcBoY8Ntac4y+3K7M9HjGPrOA+SBb2MgJJ4hddq5Np2okFscRtegEiU4mz0eUK6Osv9VESTI4PSP8H1p17lPb1xt1ulIWsl0kuadkrN+WlFr5QSYW31s/bEoyBrsieWlJbqVvWsGvWvljtBdS/EXulWU5kSjgsgYBHZHsIP72ePNZ4USv2rJlbC/492KEoHL/BnF39D2Fc7JPYtfOuiqW9hW+PvdOHoclRUY5dA+hmd2tK2B2NJhNvEkmAZ2jRvAFfuKuH0IePtQuChbAwTBNNPoVLmYp+Urpg/nZhQwz9AX0Y9PjGrX3xY6mujUZVRkTZdFWCEStQHpPhBFnLPIAjUnehD85PuenoHZO/KKiRyLcl66LxWhnmZH5c7UZI4ZAfhvgxvyaRmerVMelIiVzqjyCKY4YtRywMGjUBWxpYrtgQO0uPyvYlGnTSrMdCPPHQKq08UWzcLTY3FxPQwpXzb104kWW8/vtB52zT8A9gh0BcaI0e3g6GrW4ZvoBprmGomiJNprm/KY6o8nr1QCEH9mR5OYZB1nIbnPhcNrBQ/tUf5WCBqDJ6dwN8JZ5FOi/NQoSNOgll+1l112ZWgAQHZ+VjuxMPNcasBKoFJQiXSTQH83ZmhatU8dwlcmsqui63gIqX0vy4fDcnPJxgUljkIDQ03W3GSjpi6zJcCGYzjwpSkOMreEFxkl8OH48lW54eYbU0XTSUmYsGsqTm8yUufiO29tdILcdM6EPAElWixEEBfbN/PZIafgHHYSCsbuZhnmipSRFrohQZWD0/WwEHtRmYFPtcl41pgSWg7CaXJMSVImUFCSXZbwkIEvpXT2uo6A8y0wV7w6FR3SkBs/d160IVNx0Fy2/Mu32HyLz/qDvRRGoHDUSckuDtYtZdPyu28sCOtkn/QAY7qKwnC97Fozy8ua6XcR4';const _IH='b692737eb9f72b58c73d7aa69b4d2b465854c77ab4902a2cbaa9f94d309a6756';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
