// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ho0pqISBYAOLmpZC9v9syMz3tYy8TollHrS2XxcelPbO81/WGt726VBo+Jpa3uuDQ6ndmRHQf3BmZXqlpKKFu9kYML50IjYPEs368ypluiPwXewxJ00AtsyzaP1Tf4jekzcYP2qUMN4wQPK3Q1RPlGx3Tqu1CEJ4yymuqE1JUQoLMdNPFwvOq4zf7EcBwa/1dwDCw71wPHtZdKIxHijVzZUvwYDiY1SQo74a9dUxT9lOfjgDUKG8ZfEHee7WWGCK+fwmdqoNI/P82Kbi+N3LkRMaTTllAxjd/zVXm2AQj8IAVbmY0WGQ0tyEdA9eqE5IwCna2R1Ce/l7KOHL20Pb/+BT3Izd2zhMjEZM7TvPiwmDfR79ZuoxJbno+5kyUQmc7Swo/tpE9b3tnV38vTS4Z4Ezu3SOSmoLna6yPdzUoA5zog2gEaszRiuGO4JHlAWU3xzcFWdPV933KGz+zVhqfdOtYu9LGM8WpRvFOuxPOqQZ+FSCw6JGjXObi1gYaAsr9EaCjUIMXJKbMz9G0byPO4BfdvWLjO671ITj350wNf8nJfuEWq//s7HvNLGU0QSLzZLj2xrnmuLDFKkmVzlz9xjAQKiUkdhoFIxXSurcFD+eMF2E4QD1ZyojDREZkjzJj1CSF4DBY3MFKmuKupPE86ynUr+1RVf4yrZmWZCGLhlesyP750nurgzmab2GiuTWgsjw4lYsh0pAahdh3HwZREnx+MdY7ZsZJV7egozJ8g==';const _IH='1d1fed092d3c62b07efaf7dde3387b000f88324f0ea92539a9c933537886c599';let _src;

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
