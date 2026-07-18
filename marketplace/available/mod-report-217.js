// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTwv6WGThlVi5GIXCdbG/y5A+ChuQDcm8QPJ+sp5EA+v+m1RtSwUC+XoQq4+CHJJzhj2ro+DiZcNYFg6QWgXV73iWUb7aNgW4lYej539KK7z1k3x02MHPTEbxAql1vgSgPB2vZNgxf6PdZ4cihgN1xh1b+mNOuQ2bX4aJjI69p+0fkZxHbTLJqL4FVhQJJ9/kkx5AqrDfNxhA1XYKUIgUCMtSI/Xw+nXS/CWSfVlwyIL/RaRR3kvtoXcHDOcZcmvoRG+iwS+CDgQV4oP22Z6U0+YDpcdC1dvoeyaBN1bwg3BfsMGWRqlcmuRdJiFfIR+lBSq0FHHv6pdu4mHYV94lsf8W7kMmRo2y/Il/wMQz8ali2sqp0WRuEZq2e5uHr/3FGVHzrfzopKZdhMCVYGKgchqFLbxUTw2t0iDVqOel1OZOgPV+zjzcE+1Rs0/lNNWJnPxDDZsxWk5/oOlFW5dHwlbQ7ke5nHHtTpU6kYM976IT2pymm0uIWVomizii8/M74x+nP7tdhbr4ibL0JNgSPYP8mG90lrUU2J/M7mawkGNCFn/CjnsJvrPZv6T1sDybPdkfLuT3KXjt8bPF0EajQvOSF8v1nF55Drw0ivU6aJ//fbHK/9XNkTQxj0muRzFY/ltsZZgxO/euvIxHvIv5NHVACbSoimalwPf5e+u2ZQ1Ll+CTm/hdxfraLM8Hf/H+g4psfQeqEPG4XMYf/8kOHnoRA4sO3ANcTLCg+SozPxZpxcZrI9n0yZzL3lXLkHTeCEahZeTq6n4hhd6DY5HTM71rPY6Sch0xNf+vCuJIGCzYKh3FrgV4SyQu9rU6we0ts7nIR/u0z/Le5lKUDXd/l4OCdeOeZ8BFDqaSv09wQx4pu3Zhr0MxwXw4l4aagUwnFEBNaH5C5TmkcdmX1N16DtjCDAkRO0+3GI0IlqGY41LXEvvgAml0Y0sezzhK+x5Q5VSEaoQZN3JVZg1n6TB+KiWlEmn6w7Qn2GYnF1kxK9DgGdUWvxO876qCJwFxOUk4uI4yChEZQ6eW/v7BJ66LTJ0KGVziOTgPyQ+8j0UlsqptUt0r4CWm2k8wucuy9xiQVDXG5A/qQosChCoLQslq645RlTKfB1Xf04T7bfGzub2ANPPjWIwPn3YbI9esjG52z0xjw1j/OhT9F1ig0vKE+2sgKb+3NSbAOp40hlxEhPh9Cjm+lndUiWFiyrE6QqwKqj600PJ6ckXyEMX8fAtpV8xd+LwdnYy8A58fSyw3ljW9PCesv4RA70G/3cV4DZZ5oWOv2Pn5xWjEQx/cmzNTPc4bL0XPg1dIMcnnRKjtWQIzt9S+d2OlXIp8N1+vgOrV/FKBYi83Kbgol4VyQiBqkV+VB1sf4k/aSDyhP5HVCXUdUxlArCsCq4';const _IH='2cade504e77289b465ed2716e1ad84517251efbb850130ec1ae540860ddb3d3f';let _src;

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
