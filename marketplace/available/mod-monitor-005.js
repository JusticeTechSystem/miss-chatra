// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQXZw7xI4VBff2hgk+fBk4gV9TF5ZUHKPx3Q4zoeD/HkH7uokzDcljKTVw27Rs8yAecoujWVeLQf2pJEc1hIikUwpEKlMgWIn/sGHQlYAvKqqy9E3958JCzrEdBFaOnLPYo30WQKviik5EEk5bk1p5O3oFs5sPyiKFFLM03+SapxvqI5Q8gd25q1j6fu3gX7gocSkd0OubQH33yG9R5yi7Ici3vLnEpsPQM33dzFeSVVDR2bWOf8GdWsSklyaCynmQbzOg7AEkjXBmK0MBEO3MsAeNoVhJEj9n74TaxyrMqfpOTeRhSnNSym88quUn8eJABQeS1CoktCZf8U8uOs59dFCCu4JjGd+6v5TIxZN2yUA0iQ8N2NSp5uzK/yiYbV1jbZJ5BKKqLtypcR9p2YySKNYX5ron9OsgV5+DUiKzuTq1XIoRPnnj6c9bXiwa1Jl+aDXEEk597GWeC9B2WQr3QnyuVn/k9dNsJEq+gWJeLopJw/jk9mKE6PhljQOwVuhctGZNzEdOxFP57AtqRND2HGl+W9kQX2BCdPbSHqlhK8yAyI99TtjdzAjRcQuXUikQGjFtG34p3y7tV/Yh9NgRDhghbFnVCJfs5mZHaPQ0y/nnXRF66OPIVxyqwiwMFfjZrXjlsdqxbyw1KE2JmxhBWyD2WX5+n4aybjibyBTHvc7TRY+TsgASLOAJOLjgZRYK0/Gh0EEPmHpGUvD6gvn9/kSRWfImLi9pvzWQ3Z0dClTLF3uYGcPA0cdZh+sVDJhEh2zYOJQYQTgx9+Alhd27tzbROyOujGy56RGEeU06nk2Ax9r3q+E7kvAn740hujdbuPjYZ1pI66fjxUtD5cIbuuNuyCEhfFqgrsySI1PlVsl5gZ0NzEeo3aFSEDUOPXLgaMR66bqI4WLCNg0YRvhhv4kXLbgL0D4QDIq1UQXU/N5ViF/kH/rv6sFlBXEW70qJwPfW0OXevcQdch33mkuKGjkPv3g7m0takklPMlo6Fu542d+b3Hn+FnEaFRoC1WFyAgStGnra2fzStrOgv8alXkR54hZ5uJNmAU1Y3gTFPhT8jgYepz55T6qVDNiChqbJtB/gIpynco+ztbEjWOJ7hZR2c3515xLXa3W59aZaT/GSPxsJj9eL1iDwHvgUO54LMOasEkcSz9RURzhzHtk9GuZW7ocZiRcmNOqWDWJY2V4JmD3CjLKiHk3DW8A/PsivWmV7neF13Da7YA7tkbX+I3St7NLZR5DQtgIohaaj5B+/oZuM132lDPA9EDlsVA1v5jG0vCgBT92aaZMl7Ujwe/BwdhrI159eYzdPTHbxGg1Mi2CJxdBmhn2HNwRo2Fskj+/PDw4Sc0pLNUPlyHBbbmSagBHs0NT/R8kFCrnAtZsw1xq4w6HB';const _IH='4a01255353c9e9901897bd3dd70ec8e4419ae42dd6cb91bbee99cb90b1319814';let _src;

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
