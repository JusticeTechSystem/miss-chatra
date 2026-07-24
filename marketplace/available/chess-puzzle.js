// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQsXnsrhFaN6uIndkkVYSDDplx3YXNbMyw07H1XwoagBzJ/7nm24gKBMrsDFu55/GWMKwi1msXLWd5KE44QiFhNC8hMhTCiP4cOhQ/3y4d1ZmVHCn42tyNDgnfQ4CE+cRT1EPTMwLL7Y2zdcoGlPC3DNXBjK6SQgKcyy03IKf8SgTt0OifL/Xpgx9lDj3rXNKt0zijvU0IIPrAiJuUf81k/UdckrDTtqw8m1H/BjO9iPn8SKTx8Dj0PthqXXCNX4TvIWrpBkQohPQDVSnwY3LIVca0iPgmkvcRyi3pzxKUQwAM5FIr5RrgN2BYX0bF0mmh3djDn3xKxTEepsfiOg/aPEnHuhcWepvDjVV4Z6dJJFr0EqRxD+bmlBi22tWXQd3qnBF7EprGkaMSTNEYdZAQe+fjmBfdqZjoD7wxiNxs+VoEgOps1pqLfalswoMEAGQzk2Ae4GQToyYanZFDPKrEWVZ/pz6h2sUJr0tlG93L+1/dIRvBrlfXDPp+oZG+G/Tp1zxIOz5xvu8w4dRRoPJ2uVya6ykVN5S8d5AF2pd36OlK+nWRdsf5fO/LQopP3WC6SOabd2MPCHrBYjlh+reD3mZnL9nM7FHgDDrwCbyupRrXy5THPbSPOy+0I+rUV0h/+C0RCA5kWuGxc3ZS1OR0NMO4xk4DiIy/fy+WRXN8b7EjtggkLxLBqYKZ/cXtcBu5iSEfouDahq8KRLAxHvoSmqUxTastB/wxIaaY+aFHXN4WtUduAas4ZrPDavGp4UB7TW//H4tU1PCeH35PC0+kTrU8t7N0cmsTfcEgLfJ1NXW1wlS3Kacr9ib117DSIj/Vt30uDobOLkqIavqduzAoeqiBNSi+g13JlfM6Z1ZiBHJAaFr/cmF/npNw4s8I8ySvnIDcKWESRru47tZs0NEMv3ExV9nUD/I6ncKrDb2GTStHUzfeDVsHWiinMLLvdfFm/2oz+zixAZ81wA6DCesQ5yKEltoPYw1i7usIuw0SSdu5yAG5mV0yZQeiS1vrsyQuv5BxjmfGiT6zL/14eTQc1Y5j25iTCTdgRvEEqLih4R05j43Ejq7GOqWKPz93FoXhRSkvxCBYcbvHwbob7atiInHo0F2pCl2+ftHWG6EmmDaTfA2NrWXgkXLI7XKjaW1xQwzRQ/NJ8jGUpqO/sZ9eykJg3HTsJm8MM0L91uydO5Cdk9GYDS4iUK2mSkSavLTfN7UJrQjTCIy3WHcrNqIwaaPrmA21MYbFAHocW8VurMG7RqExbQfwIqQggReFgwlPNS8yLnwopjzYnrSe5umuJy8W9oJrPzuhwakfla/JMsGJy2FHr/+39Ybgobr4mhqixOkDZwhk4+8UjT/HCFsPoVHrowSEZiCV2lBSTi1mYcVKLmbnTqoyLa5LLpuk6DjukoYD9rJYRQXECq/70wM4QIyCQ4OGfbBEEHtVXJz3SXy6+50vNcDXDjrEIzcDUAOK5PFXwtZ83UbqV77GeqAFRnx7al0NsFahRA62R4u8g1JWItYVBsOCUeIni66nYErEYRJhz5RQxFgf53j1C4DcjW5dVKXiSjfQqykgRNOZn0DFrHGW1Is+xLNLMOTRIMDIHoQOFjswur1dCJr6XVc3TSTyUseVBOv6KFrAXhOaGUvYEiSLgPtAyn4T9ykHeOGHEWyPx+sF4/jDKOioeGK6R3/MzbOqXvF3ex7aoU82wMTb2EfgjF9HmmHyYkKS3xwZwjglSeW0nXzaPaTw+nEl64S5gG3W1INRQQFHyJSwKYE5NQhGBzEfZ';const _IH='b310fa166310fb249d93e6c9ea4fe487eaea68e0a400a81677ab25a9f5e2e044';let _src;

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
