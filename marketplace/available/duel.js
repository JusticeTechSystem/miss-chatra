// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXyGlxDvn6EIjPkp6UyFde4OA3yKVClJeG8B7DqxXO1NpoOBAxsL7m3mJSw/laZICKwofK7vp02sO6BQ98RIjDA2dPP98WrDCFp7zpc/PuehKIvY9jKpfFWiixcUKYjpEm8k6ta8ytaCKJkcraVyu+gn0owF7di/ThY61O94/plqe/7Fb5XY/nGQIeFupIZa1aJHxvmebnfXQBjKr3eET//z/miIU4CvZ5ZIRIEj/0z7Tl05dkHYikAWvgxb5+vEBw5W9ZfKzpBNvmG7+Yp1ILSXKiVbe6Ejml18ceeQ6qNaGeLSKWwUJT3ltDecfSUBSxNAn5MoIVgQgBYvfWAUCnNJNAP5MHp3F4iE/SLKyFKMsT0GJDS+4bTEt0QBWA5AKHmGU+Tzg/74YjgS8aCUGbf5x+ZC9XNHx1mzw6Qi94nRt+tc6aJ9RribxymGsWHxnKcvGKrDpHDeRbAU117sRdj32ebi3FHerlzcO+BQK+41VvhYxke3vLtMF1+iFCidxU96nGAqq2jxvqcLl9iTxeKhuATDKaTpbAQazP95E/haMVB03WiHwIW21lnsPecf4kFqfIrfA5Umscc0rygOaxACzg45y9Yo14WChxcjxgCEq77kjp+3iQdSqymbz9kgJINSFFXI3ArmuxYrBOwoTU6WRW05orarrIViDEkoDuBKIrMAgn7Bww2VZv1DofsU9C9kzNsNr1QkI8rHIYj4xXhi/vlDm0J5E8MpTDD8KXTR48lspJ5CRsmTcjF6J0RGRS4TyTIMtPtSRNVPFH9j8r3Xle12ql+Di+jE9XDWmjPnDp2i8JEzjUonT2Fva9GDjO/3wodGD2Umkod3rWSzj2yCT1xYAHfn6OlfCNGGOa3+6VbrV3bWlUQQC8DgQtReyo5y+rTcH1tppzlvjEkf3moQrmLNUsDR2IwMo9r9TVAbkdquvPpoNdoyDHRugDAnFbtEistmltqSV+XhRnj3jHzktC/lbMoxBRkyUpPtSuRYg1eYWhhoKElQiSsoa4tmyTGMICYA6iLXFANf89t+fZZ5Ce5VSaBtZQXBiWn8GHhxwUdDoTakcaXUhzCSlYYOIvC3asv9soCdOxxd4p8O8hcQSghY28XbsUnTTMzkRbrxkPBNl3tQca2LCmGIktlbFl4T+j4O7XT1HXU+vn+W3K1m9zif0sKZGUXhoIn6u2MurQpQ==';const _IH='290086972af172de2fa82c638c65810cacdca5ab92b86667c8d52330a305ecd9';let _src;

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
