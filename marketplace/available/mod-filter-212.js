// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ssqCSZHK8vrF7BXaahAaiI6qqpSm/cBS16PjzWAJjrk3nZR1NQKHIGO04Jx75b5SLO9g0h9uSVuEqLr/JZXL2Pea3DA8qxsDCv53AKQw7vLxkCA+S2YrYflAV8i4TLWfkaxYBkZ/aY/VLKAgpYn68shqqzQAWzuLL7fe1QTjuWyWWqslrRZezhAIBV4H7w3hYOEc2Wk28+LyhYQbKkX+eBuNcI38e4/UoD0NNbcxY/oR2pq8OexoyuuvItTbN7AMybPFG/VWdTbgzIsxP/ZAGDzsgGgjkqbqLhD/qgECDPP1PCsZAOzQpWHG4h2o7R7iiDA30dDUWQDMn9SeK+Mc+camj4O08eubZWPvaxnMQ1LLA5bPzI24jI9JYrsA8q/LgXKM1S/iKnbViuk5bfgBuAnHQSDQRX5oQXsQZ1/XnHRRc2Ghck9AYIorw6ZsHTgZ+StNC309T9Zl/B9aXjrC3wwj0NYx3Ob289zk8Nl9YskAPnu2enZ9nASDpqbiwzUwTJUW5yKQ60i2dYGZJ9Hr08YpFhesa618zx08+HACEAEDlbnYRAtfwJpGE2R7CbB/tWBsXEXrDA+6P7xZSJjQBrWghoCE85z3S1HLuLzH8jfJrtE1jyZ95169u+wQDi1UdVZPxOeItKUOWjkn2MAzWQcH/U3jZLE9l4l8qJMcj6bEx/mZ4MNFHk8p1Aa7fH1YzhLuoelFrHjnNuBNiFOamMzLmQxwIH9jioSKsoFrP//WTb0PSBp3NggHna5ELKEDt6nmHY4SV1g6vr8B94nLGJrw/P4piS52nbFNvZVgbWreo48JdEUSUm9LZEicbKBMdSB4hJCBPBsTCv8EOVQL+Mgn5BcqeF2hEKAuIL7dzYOOiLmBHmwGRtWIhAk/w7dZlgL5kIgjM1s0icz5NylDlArtMMpnOzncMwWoaNcYIHJRUxoH89QZ2g6aOP8vtrFHJVBI8xN+cl38WxBZXByRwyeSJEZLKxbwLzdorGYkfSVRGaKXACop/00VNSw6iypifXTtC9YkkrOFV/iWs5FVgzwxCJ61Z6AxrFolCniWtiVaxvNE8R5qXACM+CTwye3+nJcUfKsFo2vm55xnFJXokCfrbiPrIX5M8m046kWUhfAOHjS0zLnaFbfs21q1KJLTIpBNnsAnrIiZyDu+6sbkPov8LVN5pKavRm5WIi+lsuf5wsSdHy2ujy4+uTS/4ti7TuftrfcAWtpUCj3BSNZuH1e2JiwBOizQXyXGXSvyNSfN6YS+XX89PqJUNo1QyrVGjlSYaX/Y5YocpyNibcXhkUZmsFLGI+3e+680yQukoWbBvyv8Q/DUodz9nG0oIo4Ru/mcoB+FBOqSPqePqqOHkMJXMQsWunsDtvIrKwFIgAD6J8CGsy6Ieg==';const _IH='3795653f3ff7f91632e4737c14220d38fd76b14e6eaae81e07fd5bc695f68b96';let _src;

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
