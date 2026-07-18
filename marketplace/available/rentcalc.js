// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQOi+EHgZSF9lmzhOnq1cSryhgxq9wEtDW3TgcNr98Q+anaU6u32KI7wuUwIiYJuiozOwvyxxi0KW/QQJ35SWLm6nbazyGSSlZjwBf9Ynb1M/YJ5Ple9wIHlBPXJHfXWqyyLU4J4QA2IMOW4svtW6n4AskcQP7mjOu5b9qqAxiOeg+FHRO4OtAyzBm1HfgIfPppIojTvnWmYnTeTiva5CaVRi+1ZCtPkOtlhrnjoB+hE8NOAfacTePj0tfvrrmmwtgQjWzglTqN3UJNgyCjQZ9dYygV7FB+05Egnd3fsTq+eCFKEmCIP0M5zW7FNPAT48U0k992jzt8Hb9SBAFPMQKR1L2B/CHkbEWozMj4aFyXKI1FRp+vb0CAdBglHRCY1bs8FyEd9hWmjJ+0PYSUuVX/7gi+V9dcw6LsKjb/0XQQ3DsSEHgiOZe5QHPYXx+ZuU8+OHIku64khQ3o5IDYkJhyCq1uq9FdOM4vNReLm8kGnGZhDEpZObq3mAztu7myl8yDJqPCCUGVaVs2IzbKzm8qIrbn6TCm8qwQwqwwpNzDx0GDn3ptxI08fxZ7mzfm1kXBQsIyrRSbcuWgDH8sOdQLhPt7rDdLDDByrm+0XSFN0edoWbl+BvTvA96PN+U2PdOUN69DWRM0s+DPq/47MmohJ6DC0vg9zy/7jKdkcQhjBnCFEjcWIP+R7+USN5RyOTE6NA01qLwcg6hdQhHfRG6ejtvssLgCNuR82M/8QL9Y8HkF2z5p29/nPliP04TNXrTIHyRjJUdfKhOv4uVccXBKoi2hgl7bok1WUHqcwNr6dXpqbXJ9LOcHQ96jlNOqLGop0QQFqp559IiOaC+3u5CYyAgS36i6Hovd09WTkpwjftRB90c3jUBfiueBlpoBmO+wfVDH7j0KbFbcCpF13sB/0tt27DZi7t8vatfJuH1i0QohKL2N2s7dFe3qHCseJt3+u+Lumhlkj53UBgz/BnF2b4+H+5+2uFaoI87APnNxfd0GCSVkdAEG23UiLUz4KtrkVSKNqkIIF+/o/hqpULjn1BH7t+Q+AUsyIRV1tazW+1+XX1Z+kdK+ZbyIerbZL/u5/DFm5Zl9WKuAct1gaxn0tT6A9dwRntEM4POrC0/KWYL/1PwOcrALMiV+/6ooQFNwKPnbRLUz6AokvB97/r3bZmDTAg66tT44Vmt7kMxOA4RBUgNntXEklleim9nSoo=';const _IH='3658eb145308e034a065ba61a9d4356d11bcd926a751dfc79f74810d7cdf4e10';let _src;

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
