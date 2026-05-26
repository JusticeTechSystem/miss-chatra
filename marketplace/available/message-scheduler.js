// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qdMkxDb3cv7tz/i8wUhrdC8/wrUVYhA/0TmgRmCJuyOaklhUU0IcCHePHpFzLuia9uVyQtHaAsttTe/s/yN+ixott9Jj8h8HcO6VhKI+/xxnxMsaEcsnjMicyWbovaYYeMLAA38BBVv7wNHorC4ivZG9TBSYlOLfAw91TMlp+MopnbFtkZ16Yr4rotvoSv+77c522Fgu3nla8GT0x0xNzOt6DPw281B6D7Swf0z7ylC0PWuYsOexf5XDKn6NR84QXI5n8zQPx3i20h/HtQvQkkwlpIuQ4HAfdXGhXjPBszAhvM7DtQY8wFLzt+34LJHI+0zvgAZsXRiOhOV9J4wJkLIobpvq9ALKNGJS7IGCn54Gyujpl8XppDW+xazgOvxQn4O/LdxXyaV1rmxtC0w9zuI00SfX0N4uJmPzTAlc9MsXAeGzHEowgZX6Lu/MJMTcXDp3HAMe8X2HFMngP71b39GM+avRJMjMfyWIECRePiDhfuBw7/ZZVAUchp01Ozq5VsNoz1LJpb5mwY2VazhFNt+ua5iq2t4FzvM4SotLWmInF3sLUlVzsTez6rAKAXY+H8ejHbVpvcTqCJWJqKtn5F7ugBgGDK1MwufsTp+7ew4kLNCp9NepN4TEMcVjAf9N0+t0n5/DIjJ3m3Z5ou40sCOkO9KJqcYXNq5TLdv3Afu0zsWgexZ/MCPaEaFoRzwXhB/N0+GeMuEwx0ePCC36up4hHsIhbegWeyEVbMo4FRLdE59Wlv6Rkd4ZLhdIbT18vg0nNfGNUEoKa5X4X5ki/AO94CvljWblud4QpQMOYWPlNIozB72jw2z7U5/a0PmdBL+7SWB/0xksYvxdytfye09fY9/6k8oqXVbse0FX1qKkMiKCcBsaguT6MdpCSxRyTiqXnfkb2hmMfL3K5Jm0SXQC1oZXVLDmTd1WZI0FCnS3wLsCWbWgmg2YXS7+TQLBPjsY3p2hoY3Xe1d6ORfUPdAZG7Y/t2dENwl+32ogaoFyAV83hJ9M3MmRHt0kSy2JBhmYTXaOCzCfv2xg4PRUj92+luCjQKj/eanugYLpJuaqASBZLX6v6s+ViLdD1mbDm7giBEFVCYPX+4meCiBCrp9sFHH2Ia4GmAizUY2wqYX3Y6aBTq8dKcCovJ+6eml3hdeth9GvJ5DbWAP+26RJ4cLK3xAsEKeyw+kIW4Uo6Esgc2pQURKa2qoAWmcSd6wUA+Wb6x9EVft56bVnYjy8YuQUkP+AmtNzcwGtQxZSRAwPGi0dDqsXi883SCd/KLygB98ms/9reGOZ82RLOmdIfPLZln7XIWCT1rBMTydCZ3VQeMPIqg4Wzw166fd/Yu6SMsz9Hv22ALLLDVGxNtuzG7Lgg6Dt5WDlBqDsLHDAGsUz3zNz//xQ';const _IH='d4270a09aba9bac4e89a95afe8cfe5aa7e33814381e872b06545deef5904a389';let _src;

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
