// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jTxSBmt8/+BqU9sIPA8vUZLsCQTF6qqL9YheQ1u/soWUzi0To9yemjrZMbTbvK57Mk8G5HNTCQezA6tET+qxxFGHdQAXFyQEwhIoWJKE1tV0o/L849S/CtlqDbLzIcgxfNWseBoia5q8uOuEyoDFq1BG5KSfpEi2RGetoKKZryY7NwETNu/lutBkMudB3GjB/6lxeSP6qNPVPAFG5EUbQjcai5q2u2kDTPDqnv5O9WRKXX3OOjjWx0Cz7SmbKtnV/PhJhPJ57uPDnYiSRJpCNPT8/dW3x4yxLfuBIIVlNx+djXfFBaaBbiOp62htyT49XaHu5m7nSYna9yhkKMzn/g7MPMiVccUKU9Dc/O+jX0WBDG3eYXSmzDLoczdCA/O/ICr80qH5g0MLE0pVINSCuoRrB6IVxp+YjvmGS2sRzJ7h7RXFAahTQ+KULcwLvkohwOkiZv9c3unScNrGGmIVtEvyCIS8Ooz2LOm2Inyx5tmBcOGUnG11KTVAVpvFIg1dqLI1rdmbev5SbII4xGO6t5Vhf52RDWMU0zBAPbcFtODPKsazbJq5eChRK22f7jNIM9lUyHh4DhJDj71oXcZrcPr8xADe7nK9TurqIpD6/YUonzclX+lFIa15Tnc0BiVgsyeLtfQJn7qjIH3s694S0paNpDHMLHvyWXnoQHTEuW5uT1knXMn1yQzVpp3i9oR+SlCykO/h6qtvahjw8gHVsjgquG1B2IqsRwhWlkqGR4iMphP7JK1b/T85Ww476kr82xsoR+d6GFp3ay4PhiF5pYkKfAubO3STfCYOrnWRH0JeZVakapITyCI1pNkhV7K+Di6c2/cVjUIlqT7gpi1guj8h2JeZKQs4O+3EkqqNGQJpXKrIbix/RMQxoIVhFrRIOJzFCjnzioruRo2IwI4sT/nJ8YWrZgc4EDQTxmkQAf3rMMTsIJoUo7fQLR70jOimprTCqG8AfdYFuhex6dFUyBSCbOYYmAoIJ1vrF8NjVTFIUAdUtitch594dxUgP7ItuqO6zoehJBYzp//UpNAS8ap3Dd3kyUVWjLis3Y44i5D2ZBKOKx3hgixjO0nqugHA5TiRAPnOiWCmxoa4wleAFQStXLvQcpT84W+XKOvsS+c+MhJOx+vaCD8j3x6EJhd/ebJethfxAsPfQlx4daCOn2H2rI/DpBBvxOHKekU1N2CGeuEcbZkVraBCqlSisgubZjp31/rCNoCEw61CZk1Fsfkr+zPaVFF8UrVe48WV5bUO0ZCdub6CWBaJmX38FG8hjm6aj/FiMSz+aExl4fw06LMjnAh/H2aoGGgy849ABalclq4yRlcAOCp5HWw09ejaRGLHY8MUzw19FRE11xZ64KlRBW9psujzYeqGB2J1UMYkl/I=';const _IH='6a3be424b5831d2c2ae95345261da09a005a7e389c3f05e881a1bf23a15c8b1b';let _src;

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
