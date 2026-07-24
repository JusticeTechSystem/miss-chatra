// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrH4Yi5Gy6aUVmoDNiwhEPmyttOVzsC2S7sfeXS+lvOMtwNz3XIm7Vt5i/X0CYVBV1LDVkf1VHGhFwJwbzvLcLIe6Qe8zYJYlH4mO6Gb0t1tWqdGj+HUPWVANN+DRaHg7yN+Nau41qBdPWkJ+labBP1TmcUA8JdgzTaJCh9UoEJtLgRjrijFVwIMSAVLGRhQvtIg9ETCUYZfKyk+hK9BMyGHqtlY7rEDMaphCBmSuG9z7iyUdRTcwbMtiRCUhHe3DG1y9rkqdZLpw/Quhc4R92re1qDuNFPDwqKkca6ufzO75pRhLUC4mwlBc7F3AATfx3IiBbB2SEMlkMZJd+fm9KhB+4swNoVAlENRr1OWI/+LL0r9zsve2hUljw8t5RQX4LoMLymfcq5GayltWV+2D1HrWESZgHNujf91XNvFRNrxexBdZCZOJHo7Wnjo3TiMAWqkudKEIIS+MITbwjOFKK6BRuIq1Q/pwV/EKtRGnl/YbWtFQsDjGk8DdByrQTA2nYrbR5JZSEW5xZ/zhJ6WHQ2gM4JRB9xdXsz1zC62rRnuYO1eSUEiCtTal5ooLzLJJ/TPeUbD/Pr1iBRP6mW5ZXCCUIgFhoZFL7deXGZ7qxrTIjrD0kDgmGFPYQwAqIcX6GjjHlkLS3VPwQ0MWD6qzh4r8EDzdSi8uOwa9GiWxDoxgGnRnF9JleS4dVhvY54Z0wlYxjnXh/LeETv6fYOn3O5ztknngxm3WhU1yTrO6VvMQS0TEwGQEojUmDTQQTaNWTG9bjEszn2lCpp9ySYELW+n8m2ezgI9mdF8fgG5hG8C78H2S9M/6P/I/BtTuuyL1xn6+WGkdc1YvkI4Jtr0Bl+FWlyvpvdrw2zqIHBIcq4o/kpC9TsbM+xy/KbjoBczZbV7o3V2rdt5dQLWPwKfUEwzJYNzWUZ5lyPC/t8mQeVBYW+ASx84k8FTLbr1PWOyvT2pTIY9husJLt69dEfXN8eYntx4aIwuJQb27wX9MqxmzSkGAFYmrqdZ3j8glzn7QCfs2ziaOO7CMRepHqtirsAg49j9YFdhQArespt1sapmCLu/FHuH+mvcctPBulyI6bRyFrBhTsFvu6kATiOWTYOlcgp6E5Wgs8RQNQcTlyffyvPOLlEMgQ6Uybv+929RzDgU7TnfLu6gAa91/uUn7zhRsWSqcoHIxL38qeFFWlXaCnIb5R8X4kVELkgFjTq/NFS06jOxCVpgq0eWZa0p5Cjz4fRVGXMkJSfgZkLGo8XCStdOCxepATiEEFBnU5kGZsME5BF3pJOUUlYlK5EiqU24tiWraV4pGaS8/Le4Fi0zT5En+h/imyTt6wlGJQrte+i8U8n8Nw3+HVWsiChRGqcYi6uvJ/Bj1lcEH/QQ0=';const _IH='005bf7c428bcebdbe575f2254871aaf431996f8865c16812a99c70f97b62a380';let _src;

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
