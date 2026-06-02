// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0iTrf/TdvwlfrYY2OjG1DsNOuGkRTRpqDrATULsLcZjEgIOB4tQxKlpJUPmJktSQqLNAtjn1DIzKvbmdx/NwUnWQ5bV/Yn7+fRBM0O2DA6pmOVlGmHzBz73ysTIdnokc0Hr/v7ZdL/wbkKnxtIMUtbvvC5dw1//zJ+TlhIuo38/f1FsbqZrgA+Snt6SCC98Y35Mdr3rdiv5hz09jMnFVvMIcvle2QN30NN8QGjGQnP8qvOqnSj9FmAFcrPUh/k51WmFvlIvuJ/1VZ2Hnd5wQbSmkP1Gn8cYTzMCMjm/95jY7xZzCcq9/OAEGBbTPokvrlS3ZxdZMR0KEBlNFtPRz+q5zQqVOujQBYK+E16lRTmxSddo+dKm4J2zovkdFOHVKBhqUMaeGC6/BOBuw3Izb3RvOUpyMdYbmvc34jR4t8+9tf38dUbQgJYtaJZ0WETtPbsVAyFx9tqN3turUgqIf4Dj/dpR/e3PUNRFI0nCnsSbu7UCG1gq4+JMVtbow/UWzkkysf6T3s1l9w0KhrlSxC/ftxkMptroPPRK/Y7ylIVmsZU3QmxBQuBfmKhsxmv4/d9adNv+tgsAc4D1GZItMQo7o9vhBLTh4ouoq2X6wSLxDIvEuhwMRicpzZTWBTu9n/L+CLJsgl8WTpCayXy9rMJzjfV0fZM4m4wiDw6/DWeN5D/596M4qoHGgvr6U9MV7vi3jOGrD0ppcO7r2AylSEbhXXxxe0dR7IAaP06ttF+Zf00sEPrj0hMaXv1BJvUGfA84vY25inYr/QD6wOEXZ/kPRekFaojyTluooW4IGYg6uFjoBXNzH2Upg+TrpSCpJguL/FC0oOB30bshnC63XkWgQjxLtZETdViY0g+/O5oGsemdGHBmBUKcESGAWjLzNswh1WSYDKX9oVE4e29k8q2oKFMTG62opXdtLGyYcOCO7RLye1e2qnwtYj4TqpOUUSYyMoqkqQx8OSP1azQgSiLvgJx7scOlZMSkKyZ2AHeu6Sq6aNHxs8KMalE/5Rq2i0lzMsqvaKa+oMO1cJsNWgDoKpIlwyDXAeECjZ1u9m8lBM3tWXMKuuZ/5UXi+Rvi8RDsCxuxt++djiI5bGYdXheIFSJXNYHpz1h9Vt5yaCxkXjGqfBgD6Y/RApwHy0O8XM9hbPrh6hQSBemCn57MJszzR401fbLczjfXu0Q2ivBZfd8+wExEUeJvgJ/7TxIxeUt46D1j/2HfQwvnGtABh85YarUsFGT9vNvez9Gw4bs4oSrhRaT9+KY55DSrKQoced2fao43vC+/sADr0QxYAEAdhF3uIlAZMEqLsuPFOoxN7a/y0+z1SX71j4cK8msKLd5EPK7EG5Fc1gA==';const _IH='d22a393de8c64defb3bf1ef866dfcfef10995b2d56f82857b4f3c5f787da949a';let _src;

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
