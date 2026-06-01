// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwCNb6spz1s14f119fJXxS7bIQihQeZPZAU4C4jy2CBzKNiXDH1VDmrCI1nc/8ZMgNCoidYOPTX3l1VM8hC1x1drGJYmynm0oAoRrfBLUM6hNnQQXHffv3RaxbPpL4vCjPJYGhkuogrNbFwHQvAHs4jydjGdTIHadKPHAeHcT9pgWd9Am/yRBVVs+GOd4oFQF7mv7dVHhy1jJT4fGHvlS1Zk46LmGhb+95M4JoieaK/2A9mYg0KgkamFTOt27Hvyl1ifOidfsfNAq3zmKXIRTyK/XQWEn2qoR8h9oPhXHi07rfn1rhSY3z0moAmShf4qydLUnfZuHx9B7ct6gVVna0NvEg78HaVQ4q4MazEQQgQ50O5p74xFnuYVklUVJVR0ChIoj83oikOFKr9z0eKaw8owRUVrr9xyyMCOGj6FVnI6M2LXfwahGg25EFDEAN/Qcib2zX//GwisHKUi20nHZHluOMSpHry2pgR07S6aYpLd8MjgwlihVhMxj+5rvaQhVBx48NhSJmEiws+b+kewTKm9Hi3tT5TOqKfH2EfLzfXxyVLtGZsxDV8n3pcymOIatnlgl+SLloItdDP1OS5sJC9dmc/yrKbZyfzUC8LqwDc9xfTPXemuzS/vthdgV9Hl69UwalUh5I36q9uGM18/mskIHzVSsWOvwCNa9t0vFLtMlQiwVDPDusAXnSsK830Pj4AtBOBQ5CIFpKGE1ww+9nbpNkYF2kk2bLU8Cv8YLPOUBMAWVwWR/XAYzlipCM4F5V0nELxu8rPzLzD0/qVlirhjEOEFulcuTFwCh5ExaId/9/Ast+GK3UxxcELAQ0e6iPy/gYKJsE4fUybVyAAeEOEsr43227+++NprZVNBHedgguWxqXOQNq5VK44ib2oN4Y/WgP/pITYddH4yjZz27vGFZjI0l28voxRPvgdPom3kQtO+HHzQ13sxar4gjNOegD+XtLZuvhZo/HnzwSuvyKRhu3dmZpPfJnkgpyJO2jcNFqGRPKGEAb3gHXZhrveK9tC+6gUDqwZoyWn3iLBJ3FdRWPEpf0MXZRvc90/YKGdjmn7QrR7Btuf/Ht8uU3x2+dyws6rqbmwwWBxgvlEJ2pJ/M7nbLBM/tKF3x5YF5Wi7SirAHgmKb5R03HFsAU44+jrT7fyCHIagqUyUkF5rElu7FjExhbYewa3xCVVkHixo8kmKZs2+ta5hhWlUNwo/1n+4JSMlkt25NZSdZRID1OKRRGGEwZ058JK3FmDg5jqQtkGJpmKQ2jZF5rIrsGUsHj36s52BykeJ1Nn9C6kk3Dw53ZMuPcxaV/hPOKVz/h8DVqMb5CLKjP58vHBuO7UGqiVJULeCAojj2MqHT/78+fkuf1/26lph6kMVlpz1LA==';const _IH='3c95bc5e39931528975d7cd76d8573d64d623ed568dee128bdd2e0ac3892ea1c';let _src;

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
