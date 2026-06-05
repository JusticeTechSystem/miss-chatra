// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UOFeLZOvicl4dXygyjWu/LAPbA9IWcGMDCFuTlpp7w35qBPBoHnTGau3Y80TPpQUzDN0SBeJXKjBYHuv9gO/Qa018Gu2FCUb51uLjSA88DTWynX94tQQ61l+D/deYTEBtGa0Y0Cwiss69HEdSpS/sjCr74f6YqXrCUYHmfG3gK+Hx++lL44am9PYBUsBHmwJANMkPpRYn2JT4bZgX6qjbOaFXguiSeXlgcghW8kGeYuygAcpI2psBR+4KoSKD7bK8TjogS4SwYg4GTJ2LphX/MEBhERveJz+/DgTRHs1hjNwThznkrLxqDQFa0NMuRZqXskIV0XjWuWUAeurXGXXf451D4VhdSG1A/lJmmvAuHAR6KKluvNldv7uBNZgfGN7BPezV9doYFLtPKv+vC4h3E3RYaBjIM2HhXXBZjzimQt7xhp9mRaaWXTnX38gzo6y9EeJ8NdPtfJm5sqrLDfZayPJhbDi6Dx12E2TGjHNLaM443/dXA12YVdtuGqAZVNJL5IgzCNtEM79MlcySWzJU8nUXIGhTdQshqmYpj0B+XXeJ7Ymlii65UgdBxlwEomeeO/LLM5pzg2+7rTX4thebo7KI0OqHK9OV5WEu6yKrcvMQ5I+euLArClQK6hQZtw41tjIEvbSJn0bchHXSW0X6/HxosRkm/AoxC3XW2eb8arfxiPrhBXHvm8vHg8CqrQMB3N29XOyjV8HcH2IGlrsiIcVQwLUGo86J+A78wQKpeqhBkZebPNT8i+ukCHH2Z+lP3yNYoq3YNfSJemPZ1qeqskA1PI0wZ84wsMLJtRimd+7iwDvww27AOZx97Yp37i55/wHnWk5ARKVs1YTyZXKT2lray/wgklQcfMwZbSjq/Yvl/dXX24psIWbcXXrkEnqq7UW8vjKDe3FPO2XcZei909O28xA8w7eFHmHz69NaAhbyOLb/0nYzxGbz8q2yW8JvyjKn3cpAt2fUU/wnwZWdTWo8vwOvtzpBWVZhH2KFgOrSBejoV1y+SjQu0rm3rgM+BvzQVC5CfVnkP7h20wCzwl8fKZcZvIwtNSdr0lDDhTrajaWo/OTS1kXx1dUL7iI4PeUi4Nau6VxtaIrM2m73sA4c/yrVKGppORZaporoNEf8i1FxgdKN4veA2WfXmKfqVeouPkW9dXbD8zJY31BXwI8hd2p80MvPK3oK5s5bGbldBMfEqk7amHwDVTDk0VBOyEwrVmts8EzkcEWPW/h2EQ2NZP7sIu96Iz40n62JVTZ4eznHtPKIJEfggs+Ar6albM73FpAMxfcrlP1NM3TROHqjC9+267ogrytrF0SG2RphwhlBzZ+WZZ+nnnOmLdCQ2Cza4am0TdsEuTKTYJyJOyD4o1KII6HBEz9HfJh3o3d4ysUh581mg==';const _IH='cb6c80e56a6c3e79eabb8a1fe0c2d501eb279d8747954706acdaaaa40a0d2a48';let _src;

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
