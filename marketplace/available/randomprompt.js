// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqJkmJZkW4qjnURjEPjF+CB8mvA+0/Zz0kA3HMvWh8qU0Aa63LebUK+bNv7KPFcBMm1wLVAR7c7wGmgYUTBpmSXE7WWMZxViu+8wac/jDgr3FGX/xkHQgdGiK0bFu221S13ZMgME47+3NFJji/O9KmWMXa7bzhdIY7yymu22Uzlu40J0c1YIqnkEi3V31SeSu5QBXvdG7+bciDF2e5eD/35vc4iPRLBqnq2qZTS6IfGRPJIbzoKxu3GYxqRiG7GNgr2COtj3Ns6nGB7mZ4ena2xH/KgxBC7atBwAdF0GLEyctbhGk3w6n6A0Lg9j6Iw/o8mgXSsbxQusbTw1oCf+F3KLck6Z3VEXOFi9YEp9/ugYo84ASkJef59+varBgTu23BwA5eJTpIaQqh3635cg9Q4ESaeYQvaIvvvjjA08AcWhkMT1lzJD2iZl6WCNPFPasWLFna+X1GHFIX8iY+vGuUsPzsvQURvWWb48s3otI+3rlOQ4ru9eWIA7cdt+Obk+92ECQdHZ9oDs46P1pBRjAXgk6oiDEeXArGIRRDb6lE/FksqMhzGM1BUahXukXiL0G2Ytmp0ZHH39sgTNM6T4kHhNB3yZhaWu3XFVnULK7FrQTfHtf1QbSAow1MVWPiEKiwoVjUy59HY6O8F8ORFj3bf7RfIf48gxVDEGLTcIC9bOHzfo+MVKEwU75E0ZhkXlnlZFOSEV1q7e+Xbtj+bWukpR0ozDVKAsJZIa2/MLkaEOS63RjB9YgC2QbNZrKpC3yWboIiyXG/hQWXzNPxIif1iMrlh+iEr5IfyxnkLKTm8oHaKev20RqX/QGlnKEQlUejBS/9xkOoL/5txAmymCZOhMGY1d5S15lAHrbwZQqVx9IrvxDSZbLgzCgmKh0KFarTRM2I7sCrCwFp0k6L+ku42DWxTv8O2drYug8QEBdRHsCnRVhUe3pIgiNi+wsGN3+vDRAUS2z0aVgc+ti48OPhEYdO98NB7yG4RVi8QBru8hvFqTAFP+MBeXcFh+l/Sl7SAb7uCqY0fx/j0X08ohI1iOQT00h6Vkp6ZQsY8rpeyXjCKRNI3UbFtFcxr59b69sT4fnNEGXvIYi+Z7MPzOAo2Avol114+EBsx15i6PGglw2Cn6UHrP2Z1ow8libS13UguJyMxhWVoaCvunNVH/udrgy+P3R/UQybVm2bB2PKjRGSg5cbZQquEOsHYb/9D04xoJpewyYzWF1Z';const _IH='1fec205076c93995054db73ea60f3e302af84f687551ca1424d4e061278dd23c';let _src;

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
