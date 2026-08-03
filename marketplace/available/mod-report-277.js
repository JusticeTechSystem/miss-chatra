// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSmvfMzwh9ei7ryMBIKeDB+1/Ju0JxGR43G8ib6jijaBo59AIJZhZw2qp0iKdKM+nQnxEVY1HY42CDIZSYfAU53UeTzmDhSVyULl0H1nL1Tq9Wb8vPiDVy63LOcAPIT32sqI8OMdsmxBI6MXUS1nVx+xB+uSB3Yq6ZfIwGVwwVzYhMdjy7e7u9x74RDtwzyjyvAeiLLAxR46/zgNgJ+iyWxVkglOKhECfNPxKIx58NvlN4ih3jEAK8sV5r35hwJS5XLaupH0u1gMMmuq06RjpMgo0IjCTYZP/dQdDnkF+Hy3ICJfgOh92fl48W7tqbiyQ0PnP0D+R2p6D80H3mJZPo8ReQRLq250HyB8uURj4utHv62zFZnlvDTHtDKW7pYll0BB0t+Ugbr6Mtcu11CQWSuhqBUTA+UZSJiYJ57PVrRW1HBXPze/TW731HSUKbS/7bjXRGnTytRkY1RX+mQ/AhtI1Qy8Kj6hLen4gL2Cbg5WdSd5nlmfbBDGqKreOXHwgjACXIiQatCe7Bc4LvkSM211a0U0SG0yc6WZ6v/5kcGPq+flR5Ur/Nxryzo817Kyf8CLwZc9MQFkaDuKpNbKmibqhtKYwHkhc7u5U20vhqJRC8UsN8gyB4x9qheP89lZ55gKJAeDDiB9wC2zZeHXpxIag0wYe8rSxRFSPuzT6zWfqQJDW/d8J6BZKKRsK/C6kFLGznNBvaV8vM3gs+AQymUX3DhBej7AMBdrfHUM1iMZV2TbD+uGYAsHS2gKkX9jaWw2PB+XH3C7Xza29CYToMyYWiUEh1KKvDHW6Q9asHr1nlYuM1iu/lL8YyxWKPHrh1vYE6mrYGJxPRO/G3m7ot8XusqBjz7SClwfxv4Gm7NSUqGuIvzdyoPqSBHGiCdAWoH53tvyMJuk4z+fGxMUNhZhK3jmikENPE6WFHhlR4NZLhMnTydtc6vhDQuTm/nCXNyMoxKcEv0b2uim3mfsiVc/iuVyjpmJ+34bkLHfrCxLyqNcT+TkE2a3Hr+14LM2Usoq7p7sYehWJExuib8+HqX7yKMTeIFC1gG+tPUIHwfZpDByLGwonoSiy9sa22p8KnGswbiTBHJutUrkpNORWC2ayN0WzhnHv9BrF6ge4svmq5C3+zkkmmfr/qL3ckQUqhSv9NQMPFAeThUBfY/bJPwUWAYgDZ9OxmHLM74b+h7iOqb90PZXnkJ4UEZqIOu2CpkkRuxCwYPjYLAiUnezIlzkBdpYneNZdrZJONbXnZGu30mJrKb1urdIgn/yGHv17/naEYkJBzuOg8TzlmqA6tYle0SaafNtjXqT4dym3XugzwGXE6L2Sj7m4YP7OvUixXAoo26DcB/JYPyat8sumzeVRHwBXUGYckteEcvUVn0ik41HwzB';const _IH='5a9da395c3243c737654217f4fd6eb9d052082a800bbda4f5fa1dd6d7fe6367e';let _src;

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
