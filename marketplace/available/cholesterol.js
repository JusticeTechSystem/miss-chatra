// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hRjITHcJcHGWce5gU/CNVhNjPPKQp45g3+G/cpPUPGqBMMBgNlKTQsB1XkkdoA2MRYZPoU1mf9gzZxPfRAClQykPF3pWeCvkv0L9PMBlfv3SGN6IB2dv99nR5ViESCjeSvFp+HiZ7wX/b1hGUJRHnSoshLXrhRzDNukeWlaCU04KJKfFmK8h4aPfw0vROsKRXQi8XjrA02J7MKoUXK2T9NguRCPdyK8GjP0gG827igh+Y++aQGvKaiUBVRSc650SwFKB75lRxBI9vNBrtQTfc2KpCJJ8qyr/da0S76Bx6fndKY/DQd9KOCBiCLL1hv/urBnFk0KJd3fIuGWzbrb4ktjQywP2rKYQb77/3XvRhxWh948X5ElMvY1tK7OfDFJSqMUYErrewB/MIaYSSTswBiHzvs6wXQ6EFK4H/M+jW072duPF3SKMQAmHIV2w8LFKztfhCsJGzN4OnLix8TtmrmBScTbtq6d47eZZV8GYXNKKV31pvThklq98B69SDWz6EJjp5VGpr4C5PSc4L+YAF/mi0bztxd38eAiTL9+PQDJr9u7Dme+Fas8V40wGSKnfIGsKCUI9Cu6MyGovFPY06shrwDKpxzj5pDX3/lSqqCJoKNrg2C7FVcupf2CIw2IXyzX3vyVgPVR+hQuu+/qyCzniE22dIdF3DDolwnyiYWeMslx2LgmeDDXKmfjF6r7yxZCUaz7l0HRcXGO6xlvAcdz9p5LGxHTtNmIw5ADWJyoVzcPy3sZRkPDrRTg94PfKyRbXdpa2nbMsktZxKgA+Qx4+vHjvGSQiiumLAZZns1JozeDkYKReUFagZoC8WTIpSNbqI6SnWJ7uqz12HyaLmVHll5rIAHJ55DxZ7HfuXJmmban8xhrbYbCmlefO2nGVpcWfeM88z2cvkIJxSssKMY8sI4z3DJqCUSpgIl+HSu6MpHY+3L1JYqjDZmK8mp0DW4ltg+78+AH3MZDgkqUC/DjY5WUorycNugAnHUdR9e3ljcLN/7WRq223ZdUCWSZtZKFegmMpVtpXwr3ZefeZ6bC3phzXtULRpqe7grbScpkw70bIeMe4wLBlUTk9DzE2dY3CeoDwYgNoD4JR3zwiGI9R/1+D2t7wO7gfGmmOmJ4Bfdyugxdp/UfHwGxQq96kl93lyrFLAvC1sh3u3W7RWCfXSr/x5LgfFUE6BzWOixwfVZllLSrtQaMtwvxWjtezYfDSbN3kjTezwNg=';const _IH='52219a087f4ae81765c1701e58477c4e6768342476eea42853c611121ecc5984';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
