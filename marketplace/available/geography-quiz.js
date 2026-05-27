// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xWJbceRqbNfGbCP9zVDCfYiKybJDxv+tP9hOH+v4OmDhWcPaFEXscyALXbADdY8feS3XJk3e8Cip4zHRpbdmF8M0G8T0Rrset3pmaVCFTOzD31VjPeXgRa77ggf76m6XaRKWDmW+86US6sP63UR9E1tlN0JXd0u37oTFY6AhHEUH7AOtqKi/Sc9CpUCQoGC7qCEdqVSS9VKNd5oDgSA0iCHfIbXoNZ7L4RsjqwPewEDZ9ttu7BvH3vZeO34GuECSQvQZQtE2DMWjWIqj6LMWb2OeMelz+meCtmUKlCyR96Fju/yy7sR93TlH5OEgvUFfswxFl/z8Aws5kk+WSTEale4ri2Wzv6vMxIf/J905Kq8gZS3qNjcjUnzi0t41Z/ALUFCG4n9OkSn/aYQ43DwMQlFKvtdiLJpsOoHem9ipXSZFMeNYwkPrNvCktPddf7eELsAq942aJGUkGyVzrH+GMNNUAMyjNeoRrH/BGmdFqUCrrV6iQtPV//Fyy9qWqcAqQvoTIx2Y2KSTcW+0em/6tUk3au+7D1O+6wp5B6faPSOvKe/kfG0a3PFJ16rt9p5p5o9dFr91lf69C6q4goQ5kKz7JlFL44+EC377ZKhuqAFzRQ/3vFSKJl7/SppVX/oOpfqsf3ybvdlkyW9zH1HclyedXTxErUNr2zjAoxzzJoZ7FLW4fXnNl679Ka0KALk3tsfcw9qkHwXX2XyWbUTiFzsGiSD3TQIqhJJFRxTC4JP7kGhJRZaTOw4AeoLzaxMV7S6TJ33z8X/SUjmj6ap5pA9XYJMPngPILB+92iioQoWDPqehuUvXUkLmqTA7NCulxQROfc3B/hCaNKU8M8+rOjIL5u8DPqo6leTn9p5vytmzUnOHZoeZctgO6b0QHju5Vb2zY8MwFOB8GSN9qsVCTjEeTSowpLH1KqDuxlhSmC5Waj51nOn4GVoL2Z/stcQ33ocUNYauhRf7h0Pz7k35b0tgwbp9ouxvaasIpE4klMYchgQXd94Rb8Ql35Fnuq8ZeqsOBe7AGb+Wm78qhf0alpQBkrQ9HRe5alIA3Fm3PplebVEeaLLXVesw/Ra1gtzBoEfgexDHRCa+L/khGxthm5RaECt+zZ1JlrmG+C/lY4Hv0Tg8e7BZ6l6I4pMM4aBLZp6tSW1d5kvAOsveQ5Ogkacc3g0CLTZrE+u2CI2jkDTPnpsGkv0VF8g41XEiR4i5Q0TSSYYxdAm+wE25sp/zsJCEQgg+W7SYLl+HLPZ2M3JfSvtKQLJ5OykZLuma09C+7YCoqhnyw1uuvSMs0vq72nCaUjOerQJT5/+U8MuEzLQeEb4haDzvyYOQ/SnbUOX9s9mgAFBCuJpALdgmaPmLJE5duF3F4QLRD/AOIOf+IbiF8UbxTvu/geDKGxZ71YkNCFeJf+5VDnHtfR0hzLB1ZOHh7/DjVdXSsFSseWQ1Y48P8YvTuDT/Vc1pV1GSJCOe4wCd5ZG6qPjIYtpDa0WspgWkaaHaUspQ47H7Na/ziu6IO1WsB4lQMI/XgQSJHNn+cPFD3ksdlVYwp/Q2vJQ8D9a0uyRtQA/LWo3MU/lUMRx2XUYabq+89EoV80CTUkMR6H9ShD0=';const _IH='879a5b13e1fad191bebe0a54eeb88b70510c22f2d244b5b7b102ef60a6207eef';let _src;

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
