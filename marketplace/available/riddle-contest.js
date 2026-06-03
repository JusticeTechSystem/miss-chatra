// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GR+FrLNCLKI/VpMKxWLN54dqEhZYYh8vgpzQJgIkmuYXaUf8acwMT3f4V6y/HiYLubV5zL/VygD14SQg9oJ0YEU60zVzydKcGwg6fTs3RgvRl5YpkZKjqGRbKIMiFBtqTUaFQiMjL3VpQ7TI5aOy+Zdc8Ent5RB/+xnd7+6Awx43qwDe4P1OHWd+kgq8nFD7ksgTud28EUXwwMFlQ1MRctl59NdPF7eyO72Hwc7qk+LqoEOpfpNJuzTfp9+BHMPYkXblf4avMlBkg15eM895gPHzO/Yk+QFrkBI7QiV/VgvnwWO5iye9qsFgz4bR4+W7ktfwFm/Wpermv1QpiRPdMamZ37TUMn2JhD9NVF1jEtsekYkIa1WdwjP3rKPGs6lB1Jy86E5FQVUBYZxCTJnhz8IMRE+AAPDKcefs9mItiH/LYFwbOh4C2NilL7JytgPr+6ZcDnfA5JVXWwfI5cwtkgDx2fyO2VmpNngkOXLUjhwOFzcZ1e0j3Nlr5I1MMEXRmmWByzEOUOMiyumrYAuy3cRlij4OmT6sjpH0JdKXGAJvNAtmZShVZzpH2FS0tHMFCNMpWT05iaDO5hPYtNnRfRmAVTkc1poGvis5wbgEmOdsYACW3LjiMxTyWries/RWr0exdekCTbAaVqP85x4XqKG7WjyYyFPNUKuFjbYwf3JVcUrfwF9/yo5R/58vZOtUS8HKAefHzlgKC5V9yhhw+bYTYLI5/ZH0NSDxsJk1H3MYJiglyNOc//pnfEJ7y9FKnqiRHpMpdLQi8q1hZg/cWhIvzFplD2SQtnrL6I9+h0GdgipFnDrnez2nWIr8+Qn/sMkupKUylKgUbA3WeCFhglprEDRbxUU5ebOlGOCGmpWAiLhrwrim516Np+whYC5qZAk7ETNM+MrueN3Km9JlpcXdYNKuJKYY8+WE2aas6vs2fbix+MSur9+kWJNIUIOiRd4ZcgjVmauT7BMI+Y1P8fOqKJ/ftNUTwqI3pbHAweWSPyKHtSGltPZ2170oX0CFo86fN6EgxIc559pcynWS+jG4Q0mcxc0jHpZio2z/zsTGsjhzcsu8mTmhIYE/ztOUyhC8kBZo0NKvMxlE5iaK3m+YBQEMtKgg73iSKUH4rtiE5fGFrNIcqVkxWTkkro0E8DaYaqDA0tgijjLodCeL1x2EDC/ikWh014yF4Jc0tyiz0odhJPW9Dxmq5n7KvpEh4q2J4d5D3Gw3HsJQErE673gFA0kVYlUFVXyO0NjxzBXOiMoNsOoZGKmVjHKhSgUhZNcFnJBakYxWYK+1ZQuopQ/PB2Dd3eNI+c668tMWvhp07PCj3kvil+vZ+TDvMTUCQHeNHAAeQvtmQFnbLaCTPoOQHDNz9RVaOeIS7nk3LmLPlza4IsOVxvo6um3fKmVlV+p1Etzbr4OOjwlnP599r0CO/OcwY+5uE2/6wb4+mQHDSOAGJgBO2Og7W/LVooETu6qerIsoW+TRgA5CqhAzf5gMhzBTD9LlwxH3gZh5mst2XENzSA6d6Z+aavfZzBGRjVDc/Q9IB2Hepxo9Qm/Dlvf6G/Pg1LvJqg3RBlszxwqUYls+aqoi1XOfk4zKF0zQ/2MudtAWHvseFfNoMuwfRM3MGu1OBPqSBvA7i8omiScsBM4jNnnW8zyhBbytWdGAXSKJAGKHvWQuPjftL2pkyNChk+2hcvoGSixK8+cIkdp5DMX6hBg3+WgWXlCaY3ZvVoErjGFuGxXvYET/Xw8/DPDrCHRx+RqVyiw06hMulz81Ssu0yQoL3XABr4c7O+A7JdGePEhn0l7mjljyRBghZvY4vGPN08UVxbf/n8nJL96V7LGMhPTqgjMpfWmNeuz0feliLU5jQA==';const _IH='b674786f2a4069fb348d302d1c62b40fa3b0a1e184ec13899055311f188ebef1';let _src;

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
