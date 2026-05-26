// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pg0J4yvdwxceyc3J7CB/AEtf5T//mfzfqBuGtJZ+r1ZWUUDeXhEGY4v7ExDQW6b4uonaiz7VueVB4Q6Kv3oSADNxCED+8T+HfqSSTahrQxjEf55tzVkZjBmHOvc4Ul1zv08oJTgH8xXfX1Y+sc4gUYNgkp8gNMQh0J+RwRXiThk6IsxCX+MQbwrRo01vY7/KjRp0hINfGF1a1WitbTGR53TwfvZlmHo2lnLEKIW6X3PTsaTrphKFEZ/t3HbfTWr/gYZpXVAxPNTtlSRRzW7jlkQgNXPYjguKskKyNKdsEwVwwWJeQUSyZWpeGGGR+OtUhlGoLDg+5W8nemZoQBiN+cudSJJqClQ0yVpCd8irBrwSZ7SxyubEz1jy3w/HnmR8dnJ2jPs22v7eTQ802w/Ik31+sur2P9Qs5iFr2xdxIrjR83t+Syu/TTcDaFH0gd7enM5VjnShhTHvgWWSoE1Y/NZkLDuz2sZtImlf6xaIqm9UX7pWdAemeCEGWsi8pkfWLMktAD7qz7TAA/YN7qkk1xLW60svck8mvrjL78Ka9BodEnHsgxZXyuslne7tp9QMV+Yd1ujAvLJG5UGUMObWL+Yt6Lv0nIgdiE78HeMG5BFZhK0KuJHA44T1OCdjhsidnFZ6KrpWg4fwOhN1gg6iSfpyZWWlq7BOvPY/RmCCESC2+iCOMWfAyuvgBncjamggHRPFQ2STbtTdAeHDSaHO9iSh9b1StQ/7YhbZk/Deo3nvmpY2kivRN8TYHwhzbm3wqUHvt2bbiQVatl55cW02oiLL/Tl7zug0YjrLKLPbvdV7rTP+e5wHU0yo6qQBvAhe+3SwxMd8Rla2VD4DxUT5V3OQOEk26oCEgZkegKcmYeKIiUFLP+QRaruv6S0OwVQBsVmTPCLRhLtv9PQPnVqG7GAxW90mfocJ8AgcIsPdeBM4FjWV++bfSkzNlOkCRMQm7ex4Abwh0VXF7pimJm62p1z3B7SpibCpdGFRK64X+D9tE/7GyrThMQ3ecAaz/bJTr9hdj1sxlvhdCq/aA6zEj9Y0Lt7JOHWs0UdUUEAdhGF5ecwLsJ9vgtHLJDGDxRqswLRSLvI0ZfW2lMXfaLjUADMX+pXCj7bxANtFhraMlwmBx03DtKGS2d7b5hsl2SPuLKVDW5bQD8VaYWNlXGIisToyk0jc2hYn1eVfaAjCF3XAevSgOdbMlOzNMFwGGxF8HrldJpywY7tK+fIfc2RtEQvl2bMO6SIJTBWBhqwfO/QNvndGvHoUiss/MJuNUJ+84Z1mVsRPywmbGpG6hA41nlxVBJQ93F38Hw2eHwml0tZnsndTJLbjYT7pvhhHSorHyuuMHxeafVV53mQSKhmghJktZNuTIB8ZW1lYSRMX';const _IH='d11ca6b9abc3827175c9c9e0854715c0d4d25ab74698b1645949e11426ce64e1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
