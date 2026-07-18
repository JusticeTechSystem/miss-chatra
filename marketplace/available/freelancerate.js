// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBDwf2QAgYH13JlKW7sAKl0wg0AfHuDNP9UBOOZJyNaCFc3jXYy9S4qq2WVJV5f5PIXxqYp8uxT3dz5zyTk9pknNgHz0Ph2XRz5EcfddYM3DgH6vbu0xjYPYKoNn0jQ8ZUlY0lyBFNcN79GLq5/lMA8bdp00aBUktDxowLY5h7BJ2KolsGJW6g0Zi9rnx0WbFK7clTTjeDtDl98PO9LvCLkpXQepb6M1yVTJJ6DS6W+W8BPRJAjlIMgBoUooN9tpjkcDK3lQoCiLH2jcS02o5tvCkLysDaLjxgKNYN9fhkK8PmuG61cpWq+52VW+jiRw0q0sEgEC/0+ipDGux35Pb3pO88SviwfcbUP/0nehoeVkIl/GmU/vYc0un/apYkv8/CLLPqK4eo+jzAU8X2IUWeGdfX7KF9/11Z1UN64W1TT5b6ZDmRNNVC+85jSOhEmz7UlRougjr3BPjVdXnAthNxupQgd6QoYqd3VuAUvE67S/gdDbktAUo7XQyz0ODBKekSIrGi9mu5mfiLMlk5PndbO+p+Vt6RK5G682uFOWO/nptihyPOPnHZZF/8lJ8/4GtvYXmus4MbsoXoq9dOEf8EJ3/iJaa7DvoZbaOmNaDRx8CF2guWyHFYqwigHSibw3hupNzPlycSr3X8OA4k/bWerUFDfedqTqpzXbNCrM15JmjtIHgB/zAfzsDCcAHMgJ/v5neToH4lSi8cK4PDVsZ8avQaz6UoMJTrX2pm6U/oiEYTDAdJdqLXJj8q1pl/cqYF7LMxk6YV+9YEDLbGskPLFkT+r0WAMWsmXJtQpYpAQA+yQ3rADpcBd53zM9es96WeC6ZfnwLgaomr1c0dl19o+7NYkuk1cv1t6lPV2wMFliYgr1AyJ8xRFcsORDwRZrKUJCcteMlOoXyWBVhQIbPGILvEWK5+Qy+0MxkOU8w/JJiYi1pfzNQlJCTePOhtQt48lcnZER47wGn7DW1GFxfdUVz2UIALVoGwzK211wigTYCTHM0FXaj+nhaX3wWT4biO0Fwl0w7KSx6qXZefJEvGdCr25/OXSo6p8oLytQN+5gH7FvKrzL6WphtT2vTmbICcRLd7T2n15FYoPF1Ruosf6foDj0Z1VQCDeOnq9FZ8dMLKwf37G0t6vFxUC1B/GN2fsYnohwEhGAkcKAmDx5qF1qRDHtnt4I+d1A4Q3JzA50w+uuX103J3N+dtTGgKAkf94XhWcnXtPQ==';const _IH='d916c9473f4e01ac6e82a0d31a10f90db3ce00bbdfe7c8acf909cfcdede0d68c';let _src;

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
