// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRffjxztHwASryuwhsjdRubz+pvQ4ESAV8BpihVI6NaQOBzlAxjHHjR3RiaxeG2tbnf0lkLVNje6wv571GfAQH4I73eqEyu+WzSDzviyYf6sb688M2h0Q/yB8foKegBmDBydC7gF1V8ApRojgQ2OUDSHTzwEf/EsH12H1A+t5jdSBLOonK69cCUWkRrQs3PHWngHD7+EkKScFBdfcKkdzGaTcKyahzTkU0qhjbpywHvdtbe9L/r4TuLNWajkjpTVg6LkrxDApT+EkEL38w0h43MMMlKyGHO2bCq+BjpuBXkeULR3+DbPVl8OtqQ10S26CPTsBzPkWCEbw04RVJQfLa4MK9QYh0+hZzNVA/zDPF2vsYz2oGzIgOTsmIoY4ikNR5jJA5wvah7qqPf6nAK7I2UVilGD8VY/dW+eeHCYRnueZ0kzp8syH3ZHR1bA2coDThQmJ1+gOTF0fBHNtJzyY8Tr0IYZAhyUgoO/3EsqS49DbkP/y+QcuswtUdD5TG29xazGjdHJchdKRplCjH7ig/quZavJTMz5rZHXqnnjnnqzV178Z7sjAv+aTWRI3dSfTnJh4wqudH1EeBgfyj878s84/fIhec0JkcOcT/dVkdtWj93kb+wyu7AL8LomCd0FqM81SteF6A2jKv5Yz2cF5BxwUhoDhXF7Fnz4y4I3DdcsG1aY+uesbVW0UlrWAKfJhBFj/Hz6v/TbhCNwDJzkmcXIjfHFMt9LQfOiC2j3uZE/fC7oitiZo77g1bFO00I/MG1P7cr5GNadj2uZpxPWM01qqLwlyGZSk0pXvuo/sisco/ZlAqToEiq8npPx6ngTx+S8gw+OTV4sc32YKR9sIVJVh88Ioxzxw365kJ0S0rpopoGTPwGLzE4nMXU891YnEQAoYKwuRV2tb0F4EBYJkXMnVK6FksGpsjQ0g2bK7s3Quw5Jk6QN7W94nCsapY+CIORL8pykIGcUTzWml+5ojnhj+DhLuM0UP1pMn8S8pkf7AUNIX76mONa4HsYzdj9ZvFhAcpNdC87RZld5RRbeL8PFImyZEvsDK6FyZDTxHsuhTGB6vIrThVez0xUvNPwcSgZd2IK+icEGg/v7LsabRiXCk5aEeXEq/wV/cmzOyUnvoVLujGi11iracUPLYk5PHwiDQ8LspjrjgEcKhJA1ZajYh0JUBt6hg2zExO/7JK2JJyWx7W1FFhhcJDZbhz3iIPSE5rjBdIjt1nPPppAeFbLkx4IudpWW2qj+HEPgTXywGtFMvg/Sm7eUyVsB8JLbAA89HDUC174LDkwKZ8qySNSuFef8VPvrT1Hi90OuTYkQsd01WPUn8zWzzOP+E1WWOIl1Hb1UQ9gyiMFMDRX0E3ePXlnV25rWN6IDcfew6FpGNGQvswJGM+DD4LHXOhtD8YGvws65jUjqdrQZ0+wMkRzkB3S7Y7c79gS9rdr/oE6vqTVkZMFiLTdr32NgA96ENUhhW2hdZijTgQ3CSolCxr0x8P6I0zGI9mU9x2DBobW3WbTGYLtTsEGC552WlCaXnUvUJm3m4sMadAr9PLIW5WeEsBi1aCevXH92jeDs9mNtisi22/zIBavfNwonTvprAPKrDpSF0KLp/DrWBfvnylZrSTtZOri6uW+KFlpezlltZ5x5lWSRsiYA5xPjFR1nBhstzZNnlCkPIrWsAjbh+/+VMBNVyQpocS5cC808TZxHZzvOw==';const _IH='120f0c39759bea5b80bcb7966541541374942b2a66b62ae9edbe80b648b0cd40';let _src;

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
