// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBQ3C2ZXoLYr6yAXO422as4AW25ckb1Xo5bhLxrdOhtS0phuOxVgbB6+Plb1/tn6Mb3ZB6B9pKtg8Bqx1lp0sJOQRGlmCE7pqbXSe2oW5o+D87/11z9T34pVeVEOInUB8hQ1y7k416SuWSLhOUx91bZ1o1H+XRaVMKBfJSnyqFry5N0wYHFjdHw0EStAzmGCrT95sLWN2H5mU/Cs1gkU0o2sb8IpzxaV+4k3iU+FsuR7YMRnxybeN3gsdOqfryoO1ppOWIPGb5uCNuI29XftvldBdGvGJ8BQH4tdTSBk17O5vOQYmYR2IhKWKfT3TPieB6KbbN3lJ/HH5FF0B2svd8jX20qJcrFVYBlNvagca93Bco4lDGXGBtvlfaehY4ukW6GLCc8/BODPTf42K7W8pMjoiK0GkkLOI1ox2krPDMG/W42ATB91MFQvJkH3AQBPfJ+jzZyJDmvy9ImTgiB1nouty/4WjvKQzMpNeW8KSjhnpeHbzQf8cNe92bwLF679GeH8TWONODhq/UDv+jakeXYXsbDttmK2oZO6frPSV3q27x3znpX7p0bD7Xl6gZuhNbX1B3ip+4tVs2GWMoGt7kVTsHFK+24d9S8KlcHLS1+pVqee7/AB6bOsLIu4c8hR/v/xz0lN0pbmVzKhNpW1JxdoqnbBpgeZe37WND4IIICmAE3Cds6JXainLI+WaR00LkvumC3sPnRwNa7lcdUaDpmLHli2zZoUeHHveKIIut/c2LtdJEZ2XcrGfXAKOTRSpdelNNttMvqI+aig8jLydvuBNTHMk/muH6xDYoFouER/bPEx5fB84sm4auBAulOJiQPWp/0+a62KXag0d8mOU5AbF1rCWRH1DMySKNR4/6vcnlewiqmX9Ldy5ob8Cd+SY3WVB/Qn8tqNh/khKhileDaag2LUvqO9kjbUNEoaX+JAVSecvj//psvFPTsZfEY7KQCBfJw6Cdu8gTbnvwKnxQjKUr5JatXhwA7eG14EW59Z3n2PSfoKo+D+sDsAiXhyImdEIMVMvaUaqrs9Rwc28q+hyRa4au5u0tXfrIJPfVrfJYHTb3U+jMYmLSutlr1MWataKmLPzcGo70REWBbu4+oKgLTRNxM4T5f3qya2j7I8AM1R93auVdki78AMsDxyRIaACubMAzmsa3YscsSSe1EZ7y/8HZQ5j/1MXuVV1XwaFS/9+sezZA3VID40qLw2KD96SC5suBDI5684LBkXIbHwlRImgHcs2uhfWHCfDdAbN0zI2lzM02zFwhlzgSxXMg7vTpuiTVyHdDzGuLHhLc/2EQ9Wbv5p2wRYaOivRZ4mcAGMC2MhiWWOVjfVDII3N/Q4xj/5u80R8wlR6bn3clG4i+MMqbvvn+BmOiAZZYIO1CejViYRhjYbvwsFl1MUwIKvEAepUJ+AjVCFMyIeALTE35VPhLUlOsNmp7b7/BEle2AwZc4p1u4MoZEHSk587nL85SZzRl4NKCwPxsOGiBxRxUcDwHlpcOTs1ds4CkoJ9R9U7bqbwIU5BHVZ/F9QLsMpcsVi4RtJ4CxMfg8i7qj6Mi5toH17uGnWl9TWno0Tw/pBV9OcqH1jUgYBwgvajBM3g+32zWuTqUhKjYohh6cEIGRbhy18W0u+8fFCJuvWEKcWfGCXlVfgf9sbp6NaLuYupCLKZj+x7AjUGO88AuzaTz7illmPvm+fi1A1WpKJ0wCM5RAKzB9VxeExmraTcz/zPAG+pc5EQtp9qJNK4SGYo+viSYjp/stimtSDuGJkx22Z7qyjbqU/1QpuhrSB4OpTuIOWr2UNtFMus0tspaWVEoQluvGDuMVMweReTc/VFPP9sOpQ==';const _IH='99ff6ff60ac6c6dce62a66e875cab12fea6d6fc068fb828aa313be5e0aef8dce';let _src;

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
