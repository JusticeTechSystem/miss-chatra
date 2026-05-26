// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W65HUKIKtaaKSwK557/LW4DX7jG++BVKfWzDoBFqPk6fW37CRvDr+JdcZvorT0SGOas9db6UFkzSRF6r2PYcXLC+22n6sH4FR7l1rYKid3VUzRI0bzcNgQaOYrAZkFh8r6fQBbBv5l8wesvLtcrWRdygiHoppNdGCES2qBgsHXwWjTxqjido9UD1Vlho6swQzOTANoMGTloOSY5md1Liaa7Y5KKDcTm+tdpRHWorCEmQwz8CAuHwwyjuFItRJTD4yQ15nHbmQYlVnMj3vhSWmO9D4DilTaIswce6qY2epb6iTfTzJIPAuS35ODPBks3c0NYUDCuX2UZ/AM+egrtf/JXkYZb03Vzw89YyEzsv+dK89oYRkssXqHtveb0i7TI1mtYFLdFuGDFtA59XsORYJTmklyaCl+9zUVXkViGso/3PdQtDq+Y1asNNaPnoJC46ggV0mpU9ADz1py93A6DrWGJapDwdfgl3KMGQyPv31DhHY9kTsYrbF8Mj+HKKrsoyBCbRxNOWEsJnNlmry7guWfRd221mZRMWCfqg+v7SlfJZJxNpWJCmEO9YhV+/Hrf4PwhPuJyzG++QupVaC6UjxPSx6FC+gehu9PIPGHVC/8gGL2WntBu0dv/QO/BZZBW5Tjtl9o0jEq/QVpJTn0JcfsKaw0GKlaw9fxUuQAUMBxmV04y5cuMcZNBS5lytvOPcr/OfItMMOw/+t67tJGeYSX1QGMGMLA2hymIlVlyRzs6ADyCqyCDCzeI0zfh5k/q8Ed1L8Ccm0AMOxxfMy6Zc8QuUWTp53I9Ws7Z8KkB0qYTkNc9KiOTJ8CtELqOT0RY6jDOKylLbX3x9yxwiHbMWxukRMEHbPJ2OQ0CcTx/E1eq5+XjtP2FrAs2EA4SmdrqDXL82kO+Iw7O/pJp3/Yr7/usCUSk0SU60HH93DzkH/RkDkcueWLxXeLZbOqT4tuCr5iuwxC8Cr8bDYAN5AXwhW8EptdQ0bXm0l+T01ZFWHQ+MuJHFkBn93E9Q+34P9zaV9BquKcf19I9IX2SmwHab36K7vyMk8M10kNWRRrSe';const _IH='a5b4a1f1ed02328065bfe8c1a7aeba6fc8cd36dc24593411176d8e37925a93f6';let _src;

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
