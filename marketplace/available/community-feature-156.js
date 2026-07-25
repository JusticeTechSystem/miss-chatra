// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNS2B+yzddI3nNx363reIAVn4Lad5DlFV3D+WbrPCC4rVT2z68ATkFF7BDIF4DhKUu5LXBReBZMuuSFZXL56xnQq6AsVEmHvr83sQNrY61VZ8WW5BtiAx0bmGRtBQJWFvOZ3av/iyjVDdGyrSKHNOIrDbA2/5As9OaqmWc1mDx/psRMwVefQsOeIkN++eCpTurnjzd3dWQre9P1SochBZaWD3J73zLmOHFMGWeLmjrCGMkLQ0ETHdKJq09l7sLAU5fNSJxvSETIc3lMwdaXakapVg0YnVFRJAwQFmMbdy51MFxbW5HZ9RsD/woo6xv4n+PcuAW4JXJbtpoMOiGSNlIydo9lnHMsiDoPdB9R6N6v2wYAhXjcGcge7IX9fI5g2z9ewTNH+ZjfUw3DkayhGSAIdTGErUb3kvzsHoO2eCaUQftMPvZXW5JILIMRTVS2HtL35uhHGWoCpL4z2fzEi3vn9yY2X+TKwsqwTKuDrQFGwf8JI39XBpPzMWLIyp1dsWNefjHviMLN6OlCYqKCIS2pUcHoHJdrrpytOc6ODul6PO5kS0G40gAuennugmFNzbHJppsqbBtstMN1EUurJTeRH1DBmHnC65jmcjMHszERN65xdLoCNHRRWT/tSmlG/w7wM9Y4VVL+HYBmEe3tiBqptNbGnd0aVuNon9RO5wse5BhU/hRcjBbU83ZctMUpCWgD4IkPqW6WYzJcEkP5OJItrBnCyvtW7c=';const _IH='f1211a190ba65791e7ca9bb1a5d547a887c31cd905653aa1fd014d0b574a89a5';let _src;

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
