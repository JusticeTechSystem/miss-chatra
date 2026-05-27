// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SgVPkXVJbOKXU/l0jMF9SLAQyTTJVSvHhcc8Gb+8af373hMa9ZU7jtBMa0AFrlk+Dlzdjx2rb+LoTVMvGsdXM/SR3SXrZLvPBn6r60PnRq+4aNutVj6JkSXp4Oq6k8CVJoDsbAI2dWxa4fvAtCXP31DmXeV5o8IvBcyUsjMz9eG9OoA+sFZYGcxoxlpwAzZTAYSTWdG6//7sc4a5l9wZV4T2gM6RQAZFsROGGJKz5Vlg2IoRo7Bd4hMmOncXLZJxJHMz0Xl1IAEx8O8hIHgd18AQDB3nPMfd/shbiU6n+jFRjDv1HvnhBeHR2ij0a2U4m96kyCCQ1Sr4Gwgw3cFISJTIumw3rfE5VIOV5rzZo04OHJJyo5aRQw/q4thCVvgUVJ2y4ctwmiwL3Srv3pmk5EJzSkVlUpTi/PFxi8UNSoKAcKRAOTVJ33/0BbNGUnJFJflI9FYWBln2XX7krID8ataps12NqXDaqEIfLOsdPc+xb/QgbGLoBACPsdAOTw8lRX85H+GUnqIlorBwSxJbTgizmsKTf9O5nwR5J9MFmqEzmj3mUeNkvzavYQIxw9G4HwxTfBQLhiDZx+R5gqOgeqNyeqXNOXxoLa+fKbev4eWyFsAOCLS3anG8g6ne93ri9it+DhW9HqGJVlbKzYV7m79Eo4XGE/RI5+VP+NPjJCER2wywXZ1p14eETfvWLAE6qhLWg1urAzaZhT9rrVV24K2IC5FkY/UoNs3ZN10h2g9wU/j88F9Ne958H9Rfmb6WdWmmdLiFvb3jMXxHoB91u8As9ZZRfxTXjz/fq5rHZAN311z3nuZ+qGM89q284O2CiVpGctTaTjl71SYgPBvjQN5ePzwh9RKXc46fCjdma/D5VOD/zgT01TxefzBIjsmunn8Tc3C7L9zX5rGgQT8JogVaGNoC9idiwQuJmLSjJPCySohxSpJdqsQ0c3kdtAq12XLuH8uPKQ6O/BZ/34rc/WlziXpOViKjlgmsvMDLWbEA3OJ6xT9nyXYNuCPcQhnHZqdSQtuXJXd/llPSmZHsUfAxiZirBKH2719V2uAP35NQ0LSMfagK/SAaw+oSF5cMsTvRkhtOM13TFyi+l+jm70X/8QuhL0tpGU39QyWQ8vLlB5Afz5I9DgaCM526Soq1+kTeC3g+ueuS9ybkFL3QaDigsKJNk/8LbCF6hq6rvvCS4M8tCLciNflCUg6YuoI02rznD7KQaoLsQomttYs=';const _IH='eae73bc328754e4c6ee918a1159ff9eb903a5f972af8c9727bdac224ccd9e7c1';let _src;

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
