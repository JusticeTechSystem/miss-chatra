// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTM6CjbAOiAAgYM4jW11+TQVbSLdROJOO+Gb/CS5K13+L3kHxpqYAir2O3YvlQEDqZlNemfi+c8Zmq25vDPtNuXqcYJyA5naAUKKd7HhdPWB+CsA8Z/1gxXiB1lOHaZgQstkDt8vbBMDkVgIBfiJPQcGApUrPpkU6HgZSwez9Xz1ZbsD9xBGdMovSdfGTioNEYIAIc4cfdYH432aCqufv91Erfd/wZOJDPiIgCKz+KSU8Jp3/f+vA5upUdhAQeaRX3yzEsAFWNUyaEw2D6bItSH+hzFAAZnYAl/Mlwto7709gwocT5S1kVzdXZvpINP6c8WrB+BJdQe1WQJtQPnYv57IkIg2p7LyG4OyhRHl7zkyrVUt/uPyjBcJdLvgToUvJRYIKOe/wsx4dBiafzA3fIA6O8oVKBrbhb4i4vfSXqDMHlD3Gk77NP6WG1hNWf5VyS2jMkrMpE+N698s4Z84F5SH1Q1Lm4h54vFoUnOUAOJFxq8vJr3/I0Q+Sjll3fZwQBXc2xVyfxyVMW7/ylTlCyOm7KCNFdNvyopfeME5nSTBdfJOP9o2BrgIN2/VQPEzPBW4IkaUo/zu5hDCHUXDnNx8M5xkaW9zQ5xJ+0qkH7wu8/68byZ9pR9mL9X14N7ouQdBq6o9J7maBlOa4xny9qnUZJJX4fLkGqzqG9p9IKKEe7yjhk5nvu7hYxI/ru19BxtCmSwzqGMqj23NXfXu5IA8Bu1syBfQRbUGFIr93hxXtqBJPFqSsrTsjSmIenrUv+pgecqNAWD8S3w1kiJc0mqq4pGJIWNiN6lf1EoGaRKnbzxH8yC0a7CotVouqyGgMKUnl+8hODQvc9XcvAvvcVFSiHlSAQOtOue+ADgyOCYcuwP9EdFU1fNkBdkb9CLN1DEuGUFY171RxExN2aWA28wld42sTqvhu7+nyIq0bWb59ATTHHgOuwBlylz5KK5SvsaoPkoptw8c2ePJKShv1qBrXcAUJcQAs4sbg5vFHTxUBEdTWSGJLewYUpwauDTErePc6PkZG6Hkvx4Xia/qR8FzhdDCyNn4W5LALzlOwSH3EGOy2t8hhpfMlWLuSBBClxhqhLdOB9jIgnFguT+MsiMl0IX6/jclEFCNv11q7HIwG4JtwC7p5heBie2Yb0dc3B7v8EzKT+yR8D4oWFqadupIjgSys57Gz+bLkqRsJmdeNH67MYklHTPctO/X06Vi2tZiZ4ZhTpYeyivG1ys5w==';const _IH='e12eef8f2c0be21cc5c3b69339addf40ed041185e6aaa7e8fe822de6836be481';let _src;

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
