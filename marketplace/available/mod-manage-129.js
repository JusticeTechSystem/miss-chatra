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
  const _b64='T0JGdjSSaFriQxOUip5Hqptgh1BBLRVOLq1Zhxc+YILzo08lH7TzhWH4gMrNKpCj8hce2GAOVzEj4ctAHKB3lHwZ6vTehokfGFitTiUqNRBwg2rQqczH+uCuAI6DEdnE+E4wL4RYBmWamRttOjvwKRomvwVCESAhA4Au0m72PoMXkSD3wMZBj126GMVrggVC97iiripExE3Kve2qf8rIa9ftKq8WQqVxtHtG/T2fzWxdi8ILMMjtioZjMpaKctXUO2EROroPwlsduaoOev2d1Yi1mYL37LIqRgGrtBgO1swGmH4hHccU3duBjzw67tFQg7b1EVlcK4QE+CoEo9qRyzjtfVm++cnGVPMuqbe208R0JvZBr5kkDaGbMSGHHDfsptNaJjY6jnNBzB7b92bwTzNq5lPHwuf5q6CRUkI1bfv4EBwr2gNTeD8aNKp/oEwFFxGoBoIYiELdCR/P4vKEU2oQlBHMrrYgdw7vTUiIUSNw+LTDSaTitIoqqpf8AJ1ksPvedCpFjT9R+1Ex5PlRA/RfYTBe9zmFsgCuDqeokNvUJNSstFj+Aj8AOoTWlyfHqqTIQZMhTme/KEVOF8yTnfV1JSHAC31Zr0fevpvh0KosYCihsxJdVu/5SrlNidipKKTzqFk5VSvKow+vM6LNm2sZlHCcGWRI+3YqOgm/sNU79N3cZ7Pp+tmWinrSxafpCf3slGEP82AegBOXb3OJ0IRim5P16swDlof0qvdEryd/RYY27BQiTr81Tfgt5yyP5yqXQDBZ9U/UEp2UpRd4fanP3pyO1YdLK0AJ6r927XtKmQJPIdMq0Fs7XFu9ADR3gj7KPpyBi/DMq9e5EuULOH8jOKh2rMSJcL5M73EBVgP6LVE9KzT7j/kpQ3g3fTZGaA55FVcZ4ioxsKhClVYVLmPU5H0KbX39Z9y17DyWnawCx/PoJbvilGUavqN3/JnvyAzu1wbCpJ+QdBjGl66FrrDPNcUxbUlKlz/axOrWVbPQw2RnLiBX7BFWJGgazjtGc6fFvUlRhhIvE3HRfl5/Rg0B+CY2JMaCYcDotdgOPdlZq9U/HhwVCsY8brsW2IyXcprIXH3unWOq94hU2HsxlUa/rVu889Gf7iWMjZeBvndTObOErxSW6eJUgooumsrIZby6IKaBN9nqvyYO+Yv2019GShqi99xg4spyen5wukj43aOfiHvGkNzlyncDewcGXIb8DNmD4wWhwHKhQdFJsPTEn0ChU6YT6ttsenndHXn1ORgn4wdgVorb7H2/J39dV/Ita3DLFC9wEDyrW9/aPVqN+DZB6+rO2sYZYgAp3xmRQ99SBLnIEJMiAG1B+i25oOEGMWIIB2Y6jGRk2wUB8yegXxzjveFwrF2HCkQxDPX/2hRXTB1ePVDu';const _IH='4557db47a0b6276068b5b1b7c49d18cd9a66baa0bf16fa2769b2167aad2c2661';let _src;

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
