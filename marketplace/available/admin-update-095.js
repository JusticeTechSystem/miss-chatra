// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pEoHcMokzIGZWFQ4Mhk3iyJ5t6jZ5Sh1PNSoJ1GIJiTeUDvIrkh4kX8BLz0chG+F4wBJFYSmCDJ0VCWhmQx7xAtqpLTIXB5FmlqCqhGJi2SM5OQtO9p/Bq6wGSTQ1gJbAuD4PX2OupoXM/l8UP8dhNAm69qW9cF+KMtfpFGa0cyyp5RdJnN/DgEmQlbr2RK9EhqLclxdeso+TonVmlP6roZeCFev+TxbrJdWrP2Qk62iVDni4CMSDZ/5N2URCCXgHI8PLYyZbusjXeyD9wYm+lZbOlODwtExLd6MNLHymv20ZtMBOGVhnoYv+WpdwuYB+McjWq67Moks23j2/ArYSVh8IaTwJITjwjWbejhqzf9lFQyhWoXZUdkZ0jEvh2Jho+CbcoDxzzqjNdiyS4lF2ccyhBoKRoEbMFPGL9fsKbkY1rFwJuNP+JPwHfE8PG55x/563C8dDaKB1SvoGQDyZulpF/Sz9jaNVaTOTK0opAuwS6kEK1XXmnJUaVMD+CnUR3Ik8/mtuYeExG+zs1KtHpkQABH+wEmoPSUNNfliZfxkb4/vrVt9od02NjzanEG/m8J/qUMifKERstAj2MCAOSe1CMoMbqMoFiXo2JOybpWYhZGWZUdddpPwQnUajUWN70izMrzzbrpq7KKf3RmnAmzOnlbvljnc5+FCf7NFI8iKJ9oWiApZELZHqiOwEMFiPmPH0BbFesS+FxlJBO/0pWLdAn4sXXXG7zWAxwJfkB2JRxHdILeRfCxSjOzI3jsRmNCKzd6vDfUP5E5e8doa66bMYqo1a9V8VSKLWpyBW48eBaslnJ2jKHPciDBj2d+INuBPpLuaiAQ9KWeb6ark6fFZYlO1ozAEZMbrIiVgUainhhpM6qC7V9zNeHLS7uPzf9YRlDLnxBUl2n87jilLCJa2xqwhq0Hlxv8tACWSkTFDBMh0UBqMeiaNqptt02HtQnqxYgHER+Wl29+DNAtyIaCKEYr/kZx2czSJlrzTehSJ7fIXRUZifYdAarck';const _IH='5bad1b38985422e602911643da90b8508727656bdc460763fb6689b1eb4b6213';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
