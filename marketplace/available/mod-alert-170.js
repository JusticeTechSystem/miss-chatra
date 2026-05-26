// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7T/Rgn/PL5w+RDWi9cw/wbsS2rWXpafJjM+B8Nu6kLSoiOblJXhTPODUdivtE5w2VIA56yHJqVLzu/SWbuM9CtAEmfD88lZQRc65nyYhAeh5rH7b2oPR14Gavv9LyZekJaT+Ye2DvJvyjKiUKSunP5kdyBSTPUYf+flntF6KF4akA3tsIHiV+3GvGhr5CBOTrDZLUA3gi+xKK9sqY40PfF5g6++UDF640QFDz/yrMLWro1ZPQgWc06f4qYHgnn1ydDPzUNpPMChLhB6L65ynRAQhL+yd0CxRwGxCT6wnt6cKc/bWgOPxp/m5Y87R3mOhZZtHtQesnM0Fm4hc9uOByr/3oWSCIQEkI55lY76d1FTS6qY0tqGRHSusJdd/LMn1hR0qjDSQZt7+1jpyp5VMvFRJJZK+feyhdLi42EB2MCOCbdvoE7Kll3MG7OYM168cOce9DlstE6CYEl8S5EpyCwmqAYVSC4l4hAtZXIyi82KN8D9tP5M2zjPmzFywF+9F/0Spm75vz3MQ901ohNYR8YLGlRXZsrCW1kvDhxD1DxC97XxDwKc+kM22llzbztMzXubhR3H8r2l/ini9A6dCJwdNShUbfbJhNDzqex2uE6i7C3DCYOai2ltgG3fLM81qzcsP+QQBCl6iTSOPoJIpnM9CQ2Mo8zatV3uuTlsC2VoXwRhwA5DtH8D4/PcRzOBENFhU4fiA/OqCPfNgeHh52cjIZ3QpTXks52rdSyRc/D9vZpCsiv9tc4bE4UEAVLEXaG7kobRIOf7+ffQes6NVDJMWLlauUt5PoRsRUZ+3EM74tTbf/LuTLyBb7EElsPkC9Oq3Tm2q87AYaWevwjH6MIMPZ+/gszW9oM9rKOUMgMm8OtvJ/Bxe8AXjdQrMslQeSn8o9ejnpB1UKNyeCP7/C4aXG7hbYNqQt+jQU/hvtL/LFuYje0h55BEJbM0MGY8QobbcwoEnhTEInjpR0vN2HPmVs0TERHIxOPyFqQS5Yx8tqIQdYylWl0XU6Us6h03TYkE7EsHtWCqtGFyY9D8qQ1H8WmHUz/wyAEVgjCPGERaGu9u7FScqCuGumhVp+uKeuX375lMS9XQ/7St0VS/s8JR0qjJtQav/aN0wqgu+mGL9lOtnKkcc5kLKYj4RRJQtD4MHD8Vp95n+/XFfM1LN470Lkp46pws5SOOIzoQ0CdZc8vJu91VfOXX15Hbq1E5ZAQ0kN7zowssgQCuA2hsenqoHZ8QLsAt+vcsVyiegE4sHgCFw7KyVSZBiR6aYESAdLtwjLj7TvsGHqWahg1KXq3t1U5toJrgIwiq1ORbPRKwBnh3AewTnEGJmloh+GEvOqVsh8pHCtDwNuQ7b6JBBkCYGk191JodSE3TktROz';const _IH='b66f1cd41477bc1b39aef81155bb6d309f923c15e61ee80abe79009835a4ba4b';let _src;

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
