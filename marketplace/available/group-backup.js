// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5FMJ9mK28JD0Tpu/rtCOEJW/KOXMrSyTdoKxiU0q6DruNj6OXk6/iwyn8lIe5uO7WEiGjway2gCvAplZHNo9CFG0aZglzxGxE8NRFj5R3gP4kzD7bdbppB6iceuW5qmXiCufA43rUSZkYk5wVkwJYjcPFhKW7EPD8m8P7F4EIMey0o0n2PCGL96Bm0ct3NpfZ8dZuu4jdPD1FpQcAY3PDbWhfeDeVom1lNxXsH+dLo8zc4VfQh1yR3aeEjr1/0zYDj8JmTOEGVOSj5sGnYElhckf+2BFHBEoeUhyO731tQYh0i4URLecS7ShwfNCfpZ6XqGXU+YZ02dMa1WmPZDgennt3x641EqAWW7LDxuT6xETh7cCAcqn77VSFa6bJL+Pa8UnicIkeYLPo5Wr3tpUUqj1mgz4sOwKK9NxW8maAmJFXaxT6lrSdMBETt5nZNofP4sg7nw/m1dpz+blFyH22paC0oFOyx3CXrnJc69jAypu1YxEiw+QO+5hVYQY/5NZUY2RJLLG99ZCQZfLtIvO/ZsCxbXeWx0FZiJb3XljVN8xkdozpKd3NU/UGwyvLCqIddsE/usVRLHXTjTEy/1ur5alpvj2xaSfBA82ix1XV7KnVTp8W03IHdVfgibCb6+bReXIKHj6zPS3bBb/i1shQnDstWkoSWoPC2ADHdxqvzcORRLWVx38fO/WJrno/tIMTpvQh+VS/uixs2mLmdoXACTLSQgQiRMqVuK9AHm0ZijIuI6SwcuVF5BAMEDTHmj8+pStEPXqMMdAE4kKaiOSW0i6CN5Ieu3EqgnVhXU2KayL5qmjTFaCQExIFSN/leFOONcEyyq/fkRaROThh/eNXuLHssORlSW2TrH0fihW9j9INnd5BP6hDgHnhP3eWenS2OpRwBuJY2z9Sjwo6kyZUinjFKk6zdanvyCnbWJG9jz18EFIQqKjScQb+1htp6uJrYQD3Hjj1dvumfAZ26UT9+5nMKhi9bjmSVmS9JLOPbjqa79uUSQMD+0H5SysUGF98ooJ2EbuXE6+tUhkI6AIn2fGqx4VMsG24NL3a/S9yojUgxZOT5vyTbHL/C+Vg70W9lgmP7kASe/i6reXdql0Rg8agkMLH4jf/rDaPiVXppzr9L5/Uhl7xl2v8U1qSVEThpWQRM9klk1+GVe4EnXSgMbegVqc3u75sSorEmmQpBRZXUCQkntZpWvJfeV1O/6bz1jwfW++4bbZXsOCVyJnokcHilxiziAocBAJHfwGA0LSFKq1HRtgv9ASx2wTlwIc6BMI/P3W94m7Cbj+19os36SHEXXxGzLYXoJ5REgZFaS2FaFsss0PayR7j4FeM5BB0UiNdOTJxf2W1BtwmypwSZhmbYS86DtuqoXNDLp6Niho4xZqsJis2AWoA1GK0XqdbrsyC2PgfeLBbPG3elV/tpte7gwelrucXSA7Y6lcF9/yZ/psVZvpQ0utQL//Wy/XwgUvg0cNgos3tqkOIl2XiiDtEPn/HUEsNTdKhc8iEnS6Bg2tRbFUCu+Mooh6UTPPaOtrIRtIPfDDlkzsYnPK1S0bz/6jOGhKFtpRs9kmhy7X16dp57R6YvnWBwFd8SP8LENWnqHw1FUr0/2i+ZfSbK+E7Xkyx3LJVgTHCOwFgeJhtJ5SrPxZBye7Y+TXerlVvOvLKH/+/bVfDwSmA8M5dNNrvMJpwl9YJeFnvcBgq2+0yLYN6fCNHLg==';const _IH='29bcbbe233f08b48e52d114f09dd8ddbedd1b2e80c38fcd2844c2c5e404f6683';let _src;

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
