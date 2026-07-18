// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEYglkaSjLuvPPKfXR+yAT4PQ0wFrT5hjBYjmeJ5nZbe58Kvv0tnN1LRZVxCwTo/fKfkptuIo9BGzPlf6maC0K0B+CgpIfJSTHjb3VnqjbrKEzZujUA5YhMn6YJHgOpmbhzkN1ve9EuPydB877yq9WAjQrvtrU0+BIF00O8Nq7qagklVkknN0Aa3U1CmS/8bJePJQzzL58g6W8W03nCOlvoQg4o1kK3B8YoMdIUa/pGfdXeng/oky5krCiY0itVFw9HcbiuisEauhilM9GjUo/PuWlZbp3qKpd0XoUkrN7A4RG7gXGw1s5+d6LteK3A2m0QFvUr3j+WHLb6/KF9EDbjsDn9wxdIifJsxxlD+1n3+HD+UShI+yYMm9bvHDhhZ4X1yIgucbDUvQLAiHaEveuSSWcyZ0kt+n6NdM32VsYFASVfLY3CArS1sibzY2+eCOuS0VQt1AuWnoilGPz7VSAtnBpfx4bv3EFn0C3J1dwAowxCKpkJh3N43B6OsgTnDISK+xkT3Kf93Ctu8cuK8npoWwjJW+QzPcJAb/m9d+y4UXJT8QfiSF1Y9P0fgEcJrGEk2MNaGv54wug4gHTl4RAHMhI+gZkcxniD7LK2+vgx3cmVTfS8Ql+Wio6WUQMRB0A32qhZVoBsouyA7LU2Q5TtjNsHfgbggoR9hyBRpSrluDfNk0EZ8wHmUN0yySnJg4tM0p5GTyxYNnmL1ib1PtzwfYF1xbiU2tjmPn5IYds19gJYwZbJSunmXqmYiRA6OIJDgN8vo1pB40GLE7joTSIbVIoL1SCPMNid6kLKoTWD7dLIc4nxtbAWPxQBx6RIrZBsqU6xpbtfu77HyEZ/4Kvxa7aZVos7N3Wa5SRgoIAo8dI96aIVnpLko9ic0rathkBuhios0w8BRxcJetPCGYk1Tk8f9GrmlC3zmJqFHC6LPWElZg7oMiHrdge8ZKKljnbKYdrG/+Di3kLm9rpBKt3rRvcFW3UUjcZpIukWadXtO+lpeKTxswRcRXf6sKllqRBLtmQxgL6x7mrGZKcM62Rwtgbvqhfcum0NrwX+KPRZmGvjd0ic52iYdd6xcWXPZ9od51lgxGN4q2L2VjOrLg5ZcjLgFhY/BgRdb/i90kPcmYHxbViCoPZLVDp5gTVCWqnmglxU+BKHY5cyx94l+8R+SK0jPqGaooKPASsqfejlSROw4+X';const _IH='d710cec10533a16debb23a04ad0d6957b73bb5468bd9e7ed6f610ddd09779a44';let _src;

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
