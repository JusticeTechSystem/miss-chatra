// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jfnaN9eDnqg/bJK8YfIFoX0b/FgdiKma1nwLoudK+N2HLcLu6ulMWu/HlMZJDnyuKYvf8X/S0qjk760jHSr9axudRNl8LcgTChG75ZlVYV/7nvJGVPj/lE4RicZIgdtjMwZY3G72DtWgGDS+2O36wjZmVvHcAUDW8/Tp7e/9B1689UZ/VctqBo0Cc/4iq/ZqYISzuHT8kwv+70Pji6WlXpKuvT8J5+dxeqsPuXzH6k6Z286wIisQ84Gyj9ns6NeR2uqyDrSlnJXoPvxPIk/7jgPt7DSFmQysLTAIcf5pDFSl6FU1rlNkFKvorhGoWlP2dVt1gQTLLLSaCatPpFH/93FJddhVpawESZDiCcTia4/JiBI25rCNmoWOprd8d2lgfxBtH21K1zS/6BVfhpbtu8/oH5DlB4ZjeUsYgA9m5N17uLPw4liSFLv1Iy1gaLMNurKTRIg0IBXzXabC5523Er/4qxzKEBwxss5vGmAjN19QlHYuUUQZ/3QFizD1zozk1LTJpdeUlgcxTBYxiBCMqIeornERpbS57OFLApwkeP9wIT6pgnCQ7nDChctEXpSZS9E/BIgA2CJKUqfWt0Dgs+scDzEiWd/4EBCv3nuW1FyeshQ81nfBd7XclqZhHvWgSPRfuemDhnhWSzE9fAgo4p3pcLUGUiB+3n+Zr3HMgFD/KGLtSrneP4/RJO5e+DO2hTcSD1sO9DCv2eu8vjFpjTFS99huRaPlAqVu/5cOnIM0oV86ukDrSzcUo4lH0V45R9pIqn3cmVk2S7Kc5bZofP9pwgdNbhJ+AljGJVl4N5yXkzgP0LPfK1YKcMDm3Q292D0JpBy2f3dPcCrcQRozIi/zsMtWyoxnVnIsJcD+oV/X3p6KrgCroULItlZqXGZ1PvKcyCzbfsfTPPmQLCiAgB25RUyb/vSpK2udVWZ+IUf9leKY/eOtCYZLEz/oyKCTma0mQGtHC3Lmj+3W1zPhXCBrBd0wlGZ143CXoSrgZi4o78J05GXjJi1vXk3S7vR3VaUjUG8bfzoaqO14tAgBJcyWsmxeCEHNbmC/Gz0U81413AupOmIk3Q/7MWRvDwuvyTE5vOfDjYHhvEZF8+sffFcJjpAMvyNnnTF4PC8ZS4bCOn+d9Diow/7e02wBYpMDsJsSAcYrsWhlCcKehqNehTuky9J/vpmGdN61ACZrmTRas9sozIOCbhK7Z8Gq1DSqMgOLZOPD3JJSVgW7TqzVst0y4ag48Y8QQE+6tf6xTGxBSAkh4RToVSIcAYb0Kp0jNRaZ5RZjnF0R5No5h26zo5h3Ym3/Ulw/TLr2UcKjB3TnmhI6iz9PyEmjlnLt7muIOQG8sB3o9gohNw==';const _IH='a06b2773ff7f079f2004ff03790a6f2f8ab6abd5126a8b0453bbac94293c762e';let _src;

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
