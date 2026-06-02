// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='onemzWe+vJ8+/fIVUKWzizvO/SkpDXinPE5ibNCkpH4eTRyguo61k4H58+HjnSxHVDKuncC2VZJfyamT5QbC3Lz+paPgU8Kggp04fIViY3NNU04bzO7H7+5PYOoZ2B/dQ6ww8ZTZ/DfLye9R/k5bTJfY2M+THocA7k3Sp30jBvaEAPLmtmbmteu5QQHBDjGYXbkBVpJd3BhM0yqsJRtK0L+jyqmjk1nzeqFuuk9U+ZXqaPVv/Vo7jM8L5HrNdkqhIBfVoTXfintwYI6vvi5zFIueJh4+8E3upZ08T+TSJNpMkQ/3PShkDDRXCH2v0YxO04z+MlKXsrzSYqccD5xKLrpKyRQ6lXRx0ssFOj9Zgh2VR+z2qRFrTFstrpyrLNhzeTesn5HoF4T8F/hNQDxnqzECNjH4ni3ppBl++XoM0TN+TYxCeXAnoWuUGfRwfXhZk6sqi9vP5g3FwwxYoLEWNeZ9mhudr0c3vdODHBXZ8hTcdp9Y7EiJbN/TyLQ3XBNZFViNaZhrqfEQBhYbOm7apHOKq9KHM8WtiiT9JKCj91Q+ZdELiGLibxCHaY0ZNUcrEmpYQhVzRE/NIG2JaHWVR/MxAyjiDvjD55kaiNYUOwXzaSR4R5sC1Zn18aXo8sxEKDXiZ+VSjxrEppkcESufJRjCcDXvZLL/1VomIVliUzlUpe5qQqGpSb1tNYh0cMc4EdGjrnQRed3U75XVRkU3xtv0cwMHhJeu1R78psbuir0n47tkzQNV1UmDBLv2fSVXmmYohgkBxSwUdG675zz9R2kq8z3tyiuWtzw6Xjwt7eNeqH+0mk2u+egvZJubnjX7UQlAKc4QyTqwj4k94hM7/t3csbFKKgs+tjhLOHq5x/53tWEzLuNAd1pxQoxSZuFivxcVNO/ZTDLmCo0JvlN9C7PeeF0xZV9WJBeWCUG3w0GtvZpfUwZPY5PWrthO0Fnq0cnN+zk7WD+4GbxeKGc9HwSis+oAC8xksOyQpgHZYk6eou8iYUVug57RVWyokUWWpjpY2NKL4qDDK8zu4P7/fhzv8lcODImwV2gTquLhk0sz8BbGB4+tvjxLPpMic2l/JaYSkWkTz8Dewzn2PHwFD3NrQ0lqihLCpMQyHlTOQQ/cJkm8+QbcCzOU25VEKxGQi6TaLqrN8g3wpI2Y61FhA14sQPX4jvf7iQAk4tZJTKErLKrnd1aVGU3HVbhUigQqDTKYRWDs4JvnlgXqgG5g93EFyZf1yGoBlb29/cAIQMGP+E2+7bzsm7gL0jPnm4HeBU6AQXLHr/zqF9koDx6Tgma4xs2PcXvKU2EOZ/l51GyAtyeZpayHtv9ZjiTU6fgszfEpK+vVYPNMYMfoZhhP4A==';const _IH='4b2cb8cfdeb54e22a2074e3decc3ca2562cd664f97abaac6bcb78271a589b953';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
