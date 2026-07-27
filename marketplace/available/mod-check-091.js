// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQX8Yo/nmESDGG4V3DubDQKycE0xrtNYfb+GCeblnoIzGxOvLiqhWpN0fl3QmGGm27j1MnEq08WUPqec2piDhsZn+EH96Lzqu8H8vcwzHprCHJwqjr17e6D7Tetn/aX5Wbs+ljoLhfBe8akamIr64ATlBg3o9UhPOcvvuYW6DyCwFIUY3Fe755rnkddwi1Lp2/JuN4xN13X/pXRPw2EDRLqpL3LJwfJ4dRxYAqPpFbDiLf/cE1ioxrQCqc0s1ASsZLwzYNOBx4cD6qSSZlDhYmEzE+EPYd8GlBZ9syzlWAEhjsdBg23L/crkVoVyHY5P/p5LHtNEbvns/Fhp3PWL5au8BSVTNXFeC05+u6fwJX5QpJqwGBdAQ28ZKs+O9bVkN74CarlOs5Su8Vs1X78A1Z7ESYXbMSOweHRN1XD3x7GTRMhkKgvz+83PbsszTZ36IJJOqlRC15QDT98muhIAGWxvTLAE+KIURAU68rAIklxn3yyoOgSZMIoERF7jL2noqtEkM394kXDPGwasRKdTyrDuGxh83C2UN+fXK8B3p2vCPhy1tsWrN77JjvndegslAxOTUIwzr9WMTcc2wDez5RCbLTc4ZLocnQbLuV/l6aFO9B+T+OeM+pdPB4xwKaTy4gy5WxIgG9OBnS8ALAfyEOZnaD7T+parUSrscpfL0r8uj1293a/3MiR6r/ARxa/shaD/O1w8Xi0S22Dg3A08MBAjRKjriXAuPuKmEwUjf+uP/FDoJgJCxynQyOIoXmU74rjBn8Qqihz6NXQHWWP4P0HnuzEcLrln+dXWtRuUAaVQ0ZLQurELXmxCQVEGVP+9EPUXk1BDeVuey9n9Kv/OOyJ+NHjhi3q2s+f5puVziiqc3wdFtd0pBEr5Li3vnTVqcOVrqquRGrTx5PH8IQKvhToBPchIS10bJe/E001gVTQFmLpN0Q/mft1wUndsPeHStOAgRf/Jc8qsE2D1GEylW058tHeONgzKAkiaxrf0DAIGuoPEX5RX1NGJ6XHx6XVX23WFLmNujUeB2YGAPDm6n1UL1BepkjCIasedybbidDU3DsdKZ8WgId2xDggnWd1lZnhIez5ZZgJq++dakP4/0TjSAhzZoEnjb8l3LcHlhmwU6TXZUWF7weisIMVjJwF80MpHNNvTGe0gYv6X9q+lNowtX5LsrdaV1V/2UdYLVJGpCLthja4UtuYEOSkOEuV9S8embMwrnoo/Y1JAmzes8Ld+Kq3iSyjMc+muJhcJ6s8KTg8wuwrLtYKwO/a55s1f+V1g/68ic6NZGcgUbXYgXb1XxJdCE8g6g2F33pjZjzQbLqcKt6lrbVyQR6JBUsHr77Qplwi3Pp90v1m/BZXaVWQ7wXcrQ31mwIF';const _IH='e9282b1b455a44e462e8680d4f46d08ecdd6600ef56113d5311ff42f2215fe96';let _src;

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
