// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpq7O09Sz3xGYDigq9GNhxKnVqVHPQluAG6jtS4JLAjo5n5WeML1QMXGWSPL2BKy9j7E2PIa/pkVqVo9phR0N5q8W6pEBQTI/QUWushpaMdZb5iaMoqp0YkVR5boqIRjAWql8AOeegfD+4CYobijNrDlpJeRtoyeWMGKX7tzPud8SgbPtvZRqNjtojpRdBuGvhqlmU7quheDPWCGmM8tPWC4WM1E56TXMiBJGINXklaAjMv9kdfsen9Sfhbr0mD+NOGJOIfzmQK0tfztDwAaB83ebesQr/zqL3OqChRHMjbU0l9SlFNbuGEu6N8vPm2l9QJ5DsbdV60zhXVAyb0wyfNNJHxURvtiuYXv7kineyNQHL/xIzShIHoCX4P8kCeY7Ih1YtJmLxqOLLUkxRFiAM3Njat7aiST20QCfP1TqY7kyumlv6Mann12TwdM+Pt/L++A6vtlKdD63HxgDOa2mKK1TPJbq+Lehxe4uyoBmM3B0U3WmaDl6XeIxI9OnDzL2Z2eQSHzJ3cRJZ2ugRGLxcMtJ8pTJ5WCp3YHAf24MPzaC7Bkxq5IH16KumPoXE5p81UOZfRGvy5wJ8jDr2GvdXQubtZkiRRJxXCnTieZYKc4nDE5Fjh9/ap5JgFS26dkFyZOVTXfjGkCiqet2Xe+uouU3LgNpDPJG74SqvjriP4XOeTB0Cw4S374co6t5fSh/s2TfNM1ilVo4IOIl5qGVFxHecj+BFfBvmeULZtGVvVxyGzhCIbW0ci0S5A75kZPJHIkf69H6FJGwMwsgrfxvLnxmzq3WLyCgN2sVJ8PPiD/GrtEbdjgnS4K3p9c442qSyUbFgJ94LvNumpH7f3zUupJePL4JPt9H1l46LVMo4bjAKwWfOvZ7ORLUtLXNEkvr2L19GXCRs8qIojmMOHgXFcub5AaPOPDYyShSzR68Rdeae3x/E2STPDOcantGh9jpZtZPRjpOO9v2+bYPdBUO0hVnZgQS1V09UMVG+41emqMTEWfL2/xtMmuYrA5YNIA53';const _IH='c068dc1cf1ecde7fa76d81df2f2adfcad8f72d162974b2b28264b90813b99489';let _src;

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
